
//this dictionary contains the chances for different items
var normalDict = {
    "common":94.3,
    "rare":5.1,
    "ultra rare":0.6
}

var rareDict = {
    "rare":97,
    "ultra rare":3
}

var ultraRareDict = {
    "ultra rare": 100
}
//contains the data for the prizes
var prizeDict = {
    "common": ["Images/credits.png","Images/shipping.png"],
    "rare": ["https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65ad062520a3f041000002b6_1.png","https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65b063efbc76544800001100_1.png","https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65acfa8820a3f0410000029a_1.png", "https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65b063fbbc76544800001102_1.png"],
    "ultra rare": ["https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65b06197bc765448000010eb_1.png", "https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65acfb3020a3f0410000029d_1.png","https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65ad078b20a3f041000002bf_1.png", "https://scintillating-licorice-cf9fec.netlify.app/.netlify/images?url=/65b063ccbc765448000010fd_1.png"]
}

//know if api should be updated when page is hidden
//minimise number of api calls
//avoid updating every pull, avoid updating everytime page is hidden
let updateUser = false

//play cooldown for games (in ms)
//the idea is to let the user play each game every 20hours
//for testing purposes, this has been disabled
//We plan to disable this in the submission as well
//if you want to test this, set gameCD variable to 72000000
var gameCD = 0 //72000000ms = 20 hours

//generate a random integer between 2 values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//convert ms to hours, minutes, seconds
function msToTime(duration) {
    //get the seconds, minutes and hours
    var seconds = Math.floor((duration / 1000) % 60)
    var minutes = Math.floor((duration / (1000 * 60)) % 60)
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    //if its one digit (< 10), add a leading zero
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds
}
function gameCheckLogin(path = "./games.html"){
    if (isLoggedIn()){
        window.alert("hi")
        location.href = path  
    }
    else{
        location.href = "./profile.html"
        //save the place to redirect after user signs in
        localStorage.setItem("profileRedirect","./games.html")
    }
  }

//update the api only when leaving the page and updateUser is true
document.onvisibilitychange = () => {
    if (document.visibilityState === "hidden" && updateUser) {
        updateAccount(data)
        updateUser = false
    }
  };
  
function checkCDS(){
    currDate = new Date()
    for (const [key, value] of Object.entries(gameCDS)) {
        //check if at least 20 hours have passed since last played
        var dateDiff = currDate - value
        if ( dateDiff > gameCD){
            //show the play button and hide the timer
            document.getElementById(`${key}-countdown`).style.display = "none"
            document.getElementById(key).style.display = "block"
        }
        else{
            //update the timer text
            document.getElementById(`${key}-countdown`).innerText = msToTime(gameCD - dateDiff)
        }
    }
}
async function gamePageLoad(){
    //data is a global variable
    data = await getAccount()
    console.log(data)
    document.getElementById("pulls").innerText = data["pulls"]
    gameCDS = JSON.parse(data["game-cds"])
    //check and update game availibility every second
    checkCDS()
    setInterval(checkCDS, 1000)
}

function pullResults(){
    console.log("b")
    //remove the skipAnim listener, prevents it from triggering again
    screen.removeEventListener("click",skipAnim)
    for (var i = 0; i < pullNum; i++){
        var chance = Math.floor(Math.random() * 10000)*0.01
        var push = 0
        var rarity = ""
        var dict = normalDict
        //increment the number of pulls (aka pity) 
        //check what nth pull it is and apply the correct prize pool
        data["pity"] += 1
        if (data["pity"]%120 == 0){
            dict = ultraRareDict
        } else if (data["pity"]%10 == 0){
            dict = rareDict
        }
        //iterate through dictionary
        for (const [key, value] of Object.entries(dict)) {
            //check which chance bracket the random value belongs to
            if (chance < push+value){
                rarity = key
                break
            }
            push += value
        }

        //Determine which item to get
        var prizeArray = prizeDict[rarity]
        var prize = prizeArray[getRandomInt(0,prizeArray.length -1)]

        //display the items with a border for rarity
        if (rarity == "ultra rare"){
            //rainbowq border for ultra rare
            row.innerHTML += `<div style = "border: 5px solid transparent;
                                            border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
                                            border-image-slice: 1;
                                            background-image: url(${prize})"
                                            class = "fade-in"
                                            ></div>`
        } else if (rarity == "rare"){
            //purple border for rare
            row.innerHTML += `<div style = "border-color:#A020F0; background-image: url(${prize})" 
                                   class = "fade-in"
                                            ></div>`
        }else{
            //white border for common
            row.innerHTML += `<div style = "border-color:white; background-image: url(${prize});" 
                                   class = "fade-in"
                                   ></div>`
        }
    }
    //api should be updated
    updateUser = true
    openAnim.style.display = "none"
    //wait 1 second before letting user continue
    setTimeout(function(){
        //show continue text
        var text = document.getElementById("continue-text")
        text.style.opacity = "1"
        //add onclick event to allow user to continue
        screen.addEventListener("click", function(){
            screen.style.display = "none" //hide screen 
            text.style.opacity = "0"
            row.innerHTML = "" //clear all items display
            enableScroll()
        }, { once: true })

    }, 1000);
    
}
function skipAnim(){
    //cancel the timeout and trigger the results
    console.log("a")
    clearTimeout(animationTime) 
    pullResults()
    openAnim.style.display = "none"

}
function pull(n){
    //if user is not logged in, redirect to profile page
    if (!isLoggedIn()){
        location.href = "./profile.html"
        //save the place to redirect after user signs in
        localStorage.setItem("profileRedirect","./games.html")
        return
    }
    //store it in a global variable
    pullNum = n
    //show the results of the pull
    var pulls = document.getElementById("pulls")
    if (data["pulls"] < n) return false
    screen = document.getElementById("gacha-anim")
    screen.style.display = "block"
    $(screen).off("click")
    //subtract the pulls and update it
    data["pulls"] -= n
    pulls.innerText = data["pulls"]
    disableScroll()
    row = document.getElementById("item-display-row")
    openAnim = document.getElementById("open-anim")
    //start animation
    openAnim.style.display = "block"
    var src = "https://lottie.host/81fe254e-8e25-44b3-a723-fcfe68b7b916/psA9kkEEVW.json"
    openAnim.load(src)
    //make it so that it skips the gift open animation when clicked anywhere on screen
    animationTime = setTimeout(pullResults, 2000)
    screen.addEventListener("click", skipAnim)
}

//prevent scrolling
function preventDefault(e) {
    e.preventDefault();
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}
  
  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  
  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  }
  
  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
  }
