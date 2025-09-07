document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! (This is just a demo form.)");
});
document.querySelectorAll(".collapsible").forEach(button => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;

    // Toggle visibility
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
