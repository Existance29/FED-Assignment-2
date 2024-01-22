
//initalise global variables
let score = -1;
let time = 30;
let gameEnd = false
let hit = new Audio("./Sounds/menuhover.ogg")
let finish = new Audio("./Sounds/finish.ogg")
//generate a random integer between 2 values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function show_image() {
    if (gameEnd){ return} //prevent it from being clickable after the game has ended
    hit.play()
    var src = "./images/game/object.png"
    //update the score
    score += 1
    document.getElementById("score").innerText = score
    //convert 8vw to px
    var width = document.documentElement.clientWidth*8/100
    //since its a circle, height = width
    var height = width
    //get the div that sets the spawn area of the object
    var spawnArea = document.getElementById("objectSpawn")
    //get the random area to spawn
    //we get a random number between 0 and the spawn area's width and height. 
    //Subtract the image's width and height to prevent it from spawning outside the area
    var x = getRandomInt(0,spawnArea.offsetWidth-width)
    var y = getRandomInt(0,spawnArea.offsetHeight-height)
    //create the image
    spawnArea.innerHTML = `<img src=${src} width = ${width} id = "object" 
    style = "position:absolute;top:${y}px;left:${x}px">`

    //setup a listener to trigger when the object is clicked
    document.getElementById('object').addEventListener('click', () =>
        show_image()
    );
}

//update the timer
function updateTimer() {
    //decrement the time
    time -= 1
    //display the new time
    document.getElementById("timer").innerHTML = time
}
function load(){
    show_image()
    document.getElementById("timer").innerHTML = 30
    var interval = setInterval(updateTimer, 1000); //every second, update the timer
    setTimeout(function()
    {
        //after 30 seconds, stop the game
        finish.play()
        gameEnd = true
        clearInterval(interval) //stop updating the timer
        document.getElementById("timer").innerHTML = 0
        
        //Bring up the game over popup after a 300ms delay
        setTimeout(function()
        {
            document.getElementById("overlay").style.display = "block"
            document.getElementById("finalScore").innerText = score

        }, 300);

    }, 30000);

}