//get all the DOM elements
const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const timeTag = document.querySelector(".time span")
const mistakeTag = document.querySelector(".mistake span")
const wpmText = document.querySelector(".wpm span")

//initialise variables
let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = 0,
mistakes = 0,
wpm = 0
isTyping = 0


async function getData(){
    data = await getAccount()
}

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = ""
    //display the paragraph
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span
    });
    //set the first character to active
    typingText.querySelectorAll("span")[0].classList.add("active");
    //get the user to type into the input field
    document.addEventListener("keydown", () => inpField.focus())
    typingText.addEventListener("click", () => inpField.focus())
}

function endGame(){
    clearInterval(timer)
    //update the user's game cooldown and add pulls
    var gameCD = JSON.parse(data["game-cds"])
    gameCD["typing-speed-tester"] = Date.now()
    data["game-cds"] = JSON.stringify(gameCD)
    var pullsEarned = Math.floor(wpm/25) //calculate the pulls earned. Every 25 wpm is one pull
    data["pulls"] += pullsEarned
    updateAccount(data)
    //show the summary screen after 1s
    setTimeout(function(){
        document.getElementById("game-over-overlay").style.display = "block"
        document.getElementById("final-score").innerText = wpm
        document.getElementById("final-points").innerText = pullsEarned
    },1000)
}
function initTyping() {
    let characters = typingText.querySelectorAll("span")
    //get the last character typed
    let typedChar = inpField.value.split("")[charIndex]
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        //user has started typing, start timer
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        //check if backspace pressed
        if(typedChar == null) {
            if(charIndex > 0) {
                //decrement counter and check the character backspaced
                charIndex--;
                //if the character was incorrect, minus mistake
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                //remove all tags
                characters[charIndex].classList.remove("correct", "incorrect")
            }
        } else {
            //check if character is correct or wrong and apply the tag
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct")
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect")
            }
            //increment counter
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"))
        //apply active to current character
        characters[charIndex].classList.add("active")
        //calculate wpm, mistakes dont count towards it
        //assume the average length of words is 5
        wpm = Math.round(((charIndex-mistakes)/5) / (maxTime-timeLeft)*60)
        //account for bad values
        if (wpm < 0 || wpm == Infinity) wpm = 0

        wpmText.innerText = wpm
        mistakeTag.innerText = mistakes
    } else {
        //finished typing/timer ran out
        inpField.value = ""
        endGame()
    }   
}

function initTimer() {
    if(timeLeft > 0) {
        //decrement time and update the timer
        timeLeft--
        timeTag.innerText = `${timeLeft}s`
        //let wpm tick down when user is not typing
        wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60)
        wpmText.innerText = wpm;
    } else {
        //stop timer
        endGame()
    }
}


loadParagraph();
inpField.addEventListener("input", initTyping)