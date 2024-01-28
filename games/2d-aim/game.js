
//initalise global variables
let score = -1;
let time = 30;
let gameEnd = false
let hit = new Audio("./Sounds/menuhover.ogg")
hit.volume = 0.2
let finish = new Audio("./Sounds/finish.ogg")
finish.volume = 0.1
//generate a random integer between 2 values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function show_image() {
    if (gameEnd){ return} //prevent it from being clickable after the game has ended
    var src = "./images/object.png"
    //update the score
    score += 1
    document.getElementById("score").innerText = score
    //set the width of the object in vw
    var vw_width = 7.8
    //convert vw to px
    var width = document.documentElement.clientWidth*vw_width/100
    //since its a circle, height = width
    var height = width
    //get the div that sets the spawn area of the object
    var spawnArea = document.getElementById("object-spawn") 
    //get the random area to spawn
    //we get a random number between 0 and the spawn area's width and height. 
    //Subtract the image's width and height to prevent it from spawning outside the area
    var x = getRandomInt(0,spawnArea.offsetWidth-width)
    var y = getRandomInt(0,spawnArea.offsetHeight-height)
    //create the image
    //oncontextmenu return false to disable right clicking
    //use absolute position to set the position to the x and y variables
    spawnArea.innerHTML = `<img src=${src} width = ${width} id = "object" oncontextmenu="return false;"
    style = "position:absolute;top:${y}px;left:${x}px">`

    //setup a listener to trigger when the object is clicked
    document.getElementById('object').addEventListener('click', function(){
        hit.play()
        show_image()
    });
}

//update the timer
function updateTimer() {
    //decrement the time
    time -= 1
    //display the new time
    document.getElementById("timer").innerHTML = time
}
function load(){
    //countdown before start of game
    var countdown = 3
    var startText = document.getElementById("game-start-time")
    //update the countdown text
    var startInterval = setInterval(function(){
        countdown -= 1
        startText.innerText = countdown
        var countSound = new Audio(`./Sounds/countdown${countdown}.ogg`)
        countSound.volume = 0.1
        countSound.play()
        
    }, 1000);
    setTimeout(function()
    {
        //stop updating countdown
        clearInterval(startInterval)
        //hide the overlay
        document.getElementById("game-start-overlay").style.display = "none"
        //start the game
        gameStart()
        playSound()
    }, 3000)
}

function gameStart(){
    var a = new Audio(`./Sounds/go.ogg`)
    a.volume = 0.1
    a.play()
    show_image()
    document.getElementById("timer").innerText= 30
    var interval = setInterval(updateTimer, 1000); //every second, update the timer
    setTimeout(function()
    {
        //after 30 seconds, stop the game
        finish.play()
        gameEnd = true
        clearInterval(interval) //stop updating the timer
        document.getElementById("timer").innerText = 0
        
        //Bring up the game over popup after a 300ms delay
        setTimeout(function()
        {
            //update the texts
            document.getElementById("game-over-overlay").style.display = "block"
            document.getElementById("final-score").innerText = score
            var time = 0 //default to 0. If score is 0, the time would also be 0.
            if (score > 0) time = Math.round(30000/score) 
            document.getElementById("final-time").innerText = `${time}ms`
            var pulls_earned = Math.floor(score/25)
            document.getElementById("final-points").innerText = pulls_earned

        }, 300);

    }, 30000);
}