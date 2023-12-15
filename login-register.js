function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "linear-gradient(to bottom, rgba(193, 44, 230, 0.882),  rgb(225, 230, 90));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";

};

function login()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = " linear-gradient(to bottom, rgba(193, 44, 230, 0.882),  rgb(225, 230, 90));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

}

// JavaScript code (can be placed in login-register.js file)

window.addEventListener("DOMContentLoaded", function() {
  const inputFields = document.querySelectorAll(".input-field");

  inputFields.forEach(function(input) {
      input.addEventListener("focus", function() {
          this.previousElementSibling.style.top = "-15px";
          this.previousElementSibling.style.left = "10px";
          this.previousElementSibling.style.opacity = "1";
          this.previousElementSibling.style.color = "#333333";
      });

      input.addEventListener("blur", function() {
          if (this.value === "") {
              this.previousElementSibling.style.top = "0";
              this.previousElementSibling.style.left = "10px";
              this.previousElementSibling.style.opacity = "1";
              this.previousElementSibling.style.color = "#666666";
          }
      });
  });
});
