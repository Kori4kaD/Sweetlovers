document
  .getElementById("openMobileMenu")
  .addEventListener("click", function () {
    const menu = document.getElementById("headerNavMenu");
   
    menu.classList.toggle("show");
    document.getElementById("header").classList.toggle("open");
  
  });