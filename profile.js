
function profileLoad(){
    console.log("a")
    if (!isLoggedIn()){
        localStorage.setItem("profileRedirect","./profile.html")
        //save the place to redirect after user signs in
        location.href = "./login.html"
        return
    }
}