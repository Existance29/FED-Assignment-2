var LoginForm = document.getElementById("loginform");
var RegForm =document.getElementById("regform");
var Indicator = document.getElementById("indicator");

function register() {
  RegForm.classList.add("active");
  LoginForm.classList.remove("active");
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";s
}

function login() {
  LoginForm.classList.add("active");
  RegForm.classList.remove("active");
    RegForm.style.transform = "translateX(500px)";
    LoginForm.style.transform = "translateX(500px)";
    Indicator.style.transform = "translateX(0px)";
}