//get all the DOM elements
const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const timeTag = document.querySelector(".time span")
const mistakeTag = document.querySelector(".mistake span")
const wpmText = document.querySelector(".wpm span")

//initialise variables
let timer,
maxTime = 30,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    //display the paragraph
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    //set the first character to active
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    //get the last character typed
    let typedChar = inpField.value.split("")[charIndex];
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
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            //check if character is correct or wrong and apply the tag
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            //increment counter
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        //apply active to current character
        characters[charIndex].classList.add("active");
        //calculate wpm, mistakes dont count towards it
        //assume the average length of words is 5
        let wpm = Math.round(((charIndex-mistakes)/5) / (maxTime-timeLeft)*60);
        //account for bad values
        if (wpm < 0 || wpm == Infinity) wpm = 0

        wpmText.innerText = wpm;
        mistakeTag.innerText = mistakes;
    } else {
        //finished typing/timer ran out
        inpField.value = "";
    }   
}

function initTimer() {
    if(timeLeft > 0) {
        //decrement time and update the timer
        timeLeft--;
        timeTag.innerText = `${timeLeft}s`;
        //let wpm tick down when user is not typing
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpmText.innerText = wpm;
    } else {
        //stop timer
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmText.innerText = 0;
    mistakeTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);