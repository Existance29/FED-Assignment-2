const LoginForm = document.getElementById("loginform");
const RegForm =document.getElementById("regform");
const Indicator = document.getElementById("indicator");

const re = document.getElementById("register-status")
const le = document.getElementById("login-status")
const rusername = document.getElementById("rusername")
const remail = document.getElementById("remail")
const rpassword = document.getElementById("rpassword")
const lusername = document.getElementById("lusername")
const lemail = document.getElementById("lemail")
const lpassword = document.getElementById("lpassword")

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

//redirect the user to the previous page
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

function message(element, text, status = "error"){
  //show the message
  element.style.display = "block"
  //set the content
  element.innerText = text
  //set the colour (via class)
  element.classList.add(status)
}

//hide the messages when user is typing in input form
function clearMessages(){
  re.style.display = "none"
  le.style.display = "none"
}

async function loginUser(){
  var email = lemail.value
  var password = lpassword.value
  //check if the email and password matches
  for (var i = 0; i < data.length; i++){
    if (data[i]["email"] == email && data[i]["password"] == password){
      //success, save the id and redirect
      message(le, "Login successful, redirecting", "success")
      //wait one second before redirecting (use await for blocking)
      await new Promise(resolve => setTimeout(resolve, 1000));
      sessionStorage.setItem("userid",data[i]["_id"])
      sessionStorage.setItem("userdata", JSON.stringify(data[i]))
      redirect()
      return
        
    }
  }
  message(le, "Email or password is incorrect")
}
async function registerUser(){
  var username = rusername.value 
  var email = remail.value
  var password = rpassword.value
  var birthday = rbirthday.value
  //input validation
  if (username == ""){
    message(re, "Enter a username")
    return
  }else if (email == ""){
    message(re, "Enter an email")
    return
  }else if (password == ""){
    message(re, "Enter a password")
    return
  }else if (birthday == ""){
    message(re, "Enter a birthday")
    return
  }
  //check if email is already registered
  for (var i = 0; i < data.length; i++){
    if (data[i]["email"] == email){
      message(re, "Email is already registered")
      return
    }
  }
  message(re, "Regristration successful, redirecting", "success")
  //clear input fields
  rusername.value = ""
  remail.value = ""
  rpassword.value = ""
  rbirthday.value = ""
  //create the data
  var cooldownData = {
    "2d-aim-trainer": 0,
    "typing-speed-tester":0
  }
  var newData = {
    "email":email,
    "username": username,
    "password": password,
    "birthday" : birthday,
    "game-cds": JSON.stringify(cooldownData),
    "pulls": 0,
    "points": 0,
    "pity": 0
  }
  //store the data
  data = await post("https://jsbtech-84ac.restdb.io/rest/profiles", newData)
  sessionStorage.setItem("userid",data["_id"])
  //clean up the data (remove excess keys)
  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith("_") && key != "_id") delete data[key]
  }
  //store the user object for future use. Minimise number of API calls to retrieve user data.
  sessionStorage.setItem("userdata", JSON.stringify(data))
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