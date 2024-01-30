
const usernameInput = document.getElementById("username-input")
const emailInput = document.getElementById("email-input")
const profileImg = document.getElementById("profile-img")
const imgInput = document.getElementById("img-input")
const emailWarning = document.getElementById("email-warning")
const usernameWarning = document.getElementById("username-warning")
const birthdayInput = document.getElementById("birthday-input")
const countryInput = document.getElementById("country-input")
const currentPassword = document.getElementById("current-password")
const newPassword = document.getElementById("new-password")
const newPasswordAgain = document.getElementById("new-password-again")
const currentPasswordWarning = document.getElementById("current-password-warning")
const newPasswordWarning = document.getElementById("new-password-warning")
const newPasswordAgainWarning = document.getElementById("new-password-again-warning")

//each element in submittable represents if an input is valid
//username, email, password, in order
let submittable = [true,true,true]

async function profileLoad(){

    if (!isLoggedIn()){
        localStorage.setItem("profileRedirect","./profile.html")
        //save the place to redirect after user signs in
        location.href = "./login.html"
        return
    }
    data = await getAccount()
    console.log(data)
    emailInput.value = data["email"]
    usernameInput.value = data["username"]
    //get all the user data for checking
    allData = await getAPI("https://jsbtech-84ac.restdb.io/rest/profiles")
}


function imageInput(){
    profileImg.src = URL.createObjectURL(imgInput.files[0])
}

function resetImage(){
    profileImg.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
}

function logout(){
    sessionStorage.removeItem("userdata")
    sessionStorage.removeItem("userid") 
    location.href = "./index.html"
}
function save(){
    if (submittable.includes(false)) return
    data["email"] = emailInput.value
    data["username"] = usernameInput.value
    data["birthday"] = birthdayInput.value
    data["country"] = countryInput.value
    console.log(data)
    //updateAccount(data)
}

//input validation functions

function validateUsername(){
    if (isEmpty(usernameInput.value)){
        usernameWarning.style.opacity = 1
        usernameWarning.innerText = "Username cannot be blank!"
        submittable[0] = false
        return
    }
    usernameWarning.style.opacity = 0
    submittable[0] = true
}

function validateEmail(){
    var email = emailInput.value

    if (isEmpty(email)){
        emailWarning.style.opacity = 1
        emailWarning.innerText = "Email cannot be blank!"
        submittable[1] = false
        return
    }

    //check if email is already registered
    for (var i = 0; i < allData.length; i++){
        if (allData[i]["email"] == email && allData[i]["_id"] != data["_id"]){
            emailWarning.style.opacity = 1
            emailWarning.innerText = "Email is already in use!"
            submittable[1] = false
            return
        }
    }
    emailWarning.style.opacity = 0
    submittable[1] = true
}

function validatePassword(){
    if (currentPassword.value != data["password"]){
        currentPasswordWarning.style.opacity = 1
        currentPasswordWarning.innerText = "Password is incorrect"
        submittable[2] = false
        return
    }
    currentPasswordWarning.style.opacity = 0
    if (isEmpty(newPassword.value)){
        newPasswordWarning.style.opacity = 1
        newPasswordWarning.innerText = "New Password cannot be blank"
        submittable[2] = false
        return
    }
    newPasswordWarning.style.opacity = 0
    if (newPassword.value != newPasswordAgain.value && !isEmpty(newPasswordAgain.value)){
        newPasswordAgainWarning.style.opacity = 1
        newPasswordAgainWarning.innerText = "Passwords do not match"
        submittable[2] = false
        return
    }
    newPasswordAgainWarning.style.opacity = 0
    submittable[2] = true
}
