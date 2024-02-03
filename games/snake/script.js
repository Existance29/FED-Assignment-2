const playBoard = document.querySelector(".play-board")
const scoreElement = document.querySelector(".score")
const highScoreElement = document.querySelector(".high-score")
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

//set a random number between 1 and 30 for food position

function updateFoodPosition(){
    foodX = Math.floor(Math.random()*30) + 1
    foodY = Math.floor(Math.random()*30) + 1
}

function gameEnd(){
    clearInterval(setIntervalId)
    alert("a")
}

//handle changing of direction
function changeDirection(e){
    if (e.key == "arrowUp"){
        velocityX = 0
        velocityY = -1
    }else if (e.key == "arrowDown"){
        velocityX = 0
        velocityY = 1
    }else if (e.key == "arrowLeft"){
        velocityX = -1 
        velocityY = 0
    }else if (e.key == "arrowRight"){
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
    }

    //move the snake head
    snakeX += velocityX
    snakeY += velocityY
    //move the body forward
    for(let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1]
    }

    snakeBody[0] = [snakeX, snakeY]

    //check if touching wall
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        
    }
}
