const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");
const backButtons = document.querySelectorAll(".back-btn");
const bgBlur = document.getElementById("background-blur");

function showPage(id) {
  // Start cinematic blur
  bgBlur.style.opacity = "1";
  bgBlur.style.backdropFilter = "blur(20px) brightness(80%)";
  bgBlur.style.transform = "scale(1.05)";

  setTimeout(() => {
    pages.forEach(page => {
      if (page.id === id) {
        page.classList.add("active");
        page.classList.remove("hidden");
      } else {
        page.classList.remove("active");
        page.classList.add("hidden");
      }
    });

    // End blur smoothly
    setTimeout(() => {
      bgBlur.style.opacity = "0";
      bgBlur.style.backdropFilter = "blur(0px) brightness(100%)";
      bgBlur.style.transform = "scale(1)";
    }, 500);
  }, 300);
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target.dataset.section;
    showPage(target);
  });
});

backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.back;
    showPage(target);
  });
});
