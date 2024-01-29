var LoginForm = document.getElementById("loginform");
var RegForm =document.getElementById("regform");
var Indicator = document.getElementById("indicator");

function register() {
  RegForm.classList.add("active");
  LoginForm.classList.remove("active");
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
  
}

function login() {
  LoginForm.classList.add("active");
  RegForm.classList.remove("active");
    RegForm.style.transform = "translateX(500px)";
    LoginForm.style.transform = "translateX(500px)";
    Indicator.style.transform = "translateX(0px)";
}

login();

function redirect(){
  var link = localStorage.getItem("profileRedirect")
  //redirect to home page if no link is found
  if (link == null){
    location.href = "./index.html"
  }
  else{
    location.href = link
  }
}
async function getUsers(){
  data = await getAPI("https://jsbtech-84ac.restdb.io/rest/profiles")
}

function loginUser(){
  var email = document.getElementById("lemail").value
  var password = document.getElementById("lpassword").value
  for (var i = 0; i < data.length; i++){
    if (data[i]["email"] == email && data[i]["password"] == password){
      sessionStorage.setItem("userid",data[i]["_id"])
      redirect()
      return
    }
  }
  console.log()
}
function registerUser(){
  var username = document.getElementById("rusername").value 
  var email = document.getElementById("remail").value
  var password = document.getElementById("rpassword").value
  //check if email is already registered
  for (var i = 0; i < data.length; i++){
    if (data[i]["email"] == email){
      console.log("email already registered")
      return
    }
  }
  var cooldownData = {
    "2d-aim-trainer": 0
  }
  var newData = {
    "email":email,
    "username": username,
    "password": password,
    "game-cds": JSON.stringify(cooldownData),
    "pulls": 0,
    "points": 0,
    "pity": 0
  }
  uid = post("https://jsbtech-84ac.restdb.io/rest/profiles", newData)["_id"]
  sessionStorage.setItem("userid",uid)
  redirect()
}

//prevent reloading page when form submitted
document.addEventListener("DOMContentLoaded", function () {
  //get all forms
  const forms = document.getElementsByTagName("form")
  //add listener to trigger when submitted
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      //stop reloading behaviour
      event.preventDefault()
    }, false)
  })
  

})