document.addEventListener("DOMContentLoaded", function () {
  const footerElement = document.querySelector(".elementor-element-199121f");

  if (footerElement) {
    const fasElements = footerElement.querySelectorAll(".fab");
    fasElements.forEach(function (element) {
      element.classList.replace("fab", "fa");
    });
  }
});
