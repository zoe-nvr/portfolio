const navButtons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");
const subpages = document.querySelectorAll(".subpage");
const projectButtons = document.querySelectorAll(".project-btn");
const backButtons = document.querySelectorAll(".back-btn");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    pages.forEach(p => p.classList.remove("active"));
    subpages.forEach(s => s.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

projectButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;
    pages.forEach(p => p.classList.remove("active"));
    subpages.forEach(s => s.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    subpages.forEach(s => s.classList.remove("active"));
    document.getElementById("projects").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
