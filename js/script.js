document.addEventListener("DOMContentLoaded", function () {

  // Resume Button Toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const resumeButton = document.getElementById("resumeButton");

  if (navbarToggler && resumeButton) {
    navbarToggler.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        resumeButton.classList.toggle("d-none");
      }
    });
  }

});
