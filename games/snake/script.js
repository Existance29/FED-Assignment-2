const playBoard = document.querySelector(".play-board")
const scoreText = document.querySelector("#score")
const controls = document.querySelectorAll(".controls i")
console.log(controls)
let gameOver = false
let foodX
let foodY
let snakeX = 5
let snakeY = 5
//velocity determines the direction the snake is moving
let velocityX = 0
let velocityY = 0
let snakeBody = []
let setIntervalId
let score = 0

async function getData(){
    data = await getAccount()
}
//set a random number between 1 and 30 for food position
function updateFoodPosition(){
    foodX = Math.floor(Math.random()*30) + 1
    foodY = Math.floor(Math.random()*30) + 1
}

function gameEnd(){
    if (gameOver) return
    gameOver = true
    clearInterval(setIntervalId)
    console.log("a")
    //update the user's game cooldown and add pulls
    var gameCD = JSON.parse(data["game-cds"])
    gameCD["snake"] = Date.now()
    data["game-cds"] = JSON.stringify(gameCD)
    var pullsEarned = Math.floor(score/9) //calculate the pulls earned. Every 9 is one pull
    data["pulls"] += pullsEarned
    updateAccount(data)
    setTimeout(function(){
        document.getElementById("game-over-overlay").style.display = "block"
        document.getElementById("final-score").innerText = score
        document.getElementById("final-points").innerText = pullsEarned
    },200)
}

//handle changing of direction
//set the velocity to their appropriate values
function changeDirection(e){
    if ((e.key == "ArrowUp" || e.key == "w") && velocityY != 1){
        velocityX = 0
        velocityY = -1
    }else if ((e.key == "ArrowDown" || e.key == "s") && velocityY != -1){
        velocityX = 0
        velocityY = 1
    }else if ((e.key == "ArrowLeft" || e.key == "a") && velocityX != 1){
        velocityX = -1 
        velocityY = 0
    }else if ((e.key == "ArrowRight" || e.key == "d") && velocityX != -1){
        velocityX = 1
        velocityY = 0
    }
}

//add events for clickable buttons
controls.forEach(button => {
    button.addEventListener("click", function(){
        changeDirection({key: button.dataset.key})
    })
});

function gameLoop(){
    //check if game has ended
    if (gameOver){
        gameEnd()
        return
    } 
    //spawn food
    let html = `<div class = "food" style = "grid-area: ${foodY} / ${foodX}"></div>`

    //check if snake eats food
    if (snakeX == foodX && snakeY == foodY){
        //set a new food position
        updateFoodPosition()
        snakeBody.push([foodY, foodX])
        score++
        scoreText.innerText = score
    }

    //move the snake head
    snakeX += velocityX
    snakeY += velocityY
    //move the body forward
    for(let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1]
    }

    snakeBody[0] = [snakeY, snakeX]

    //check if touching wall
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameEnd()
    }

    //generate snake body
    for (var i = 0; i < snakeBody.length; i ++){
        html += `<div class = "head" style = "grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}"></div>`
        //check if snake head hit body
        if (i !== 0 && snakeBody[0][1] == snakeBody[i][1] && snakeBody[0][0] == snakeBody[i][0]){
            gameEnd()
        }
    }

    playBoard.innerHTML = html
}

updateFoodPosition()
setIntervalId = setInterval(gameLoop, 90)
//add event to handle keypresses
document.addEventListener("keydown", (evt) => changeDirection(evt))
