
//this dictionary contains the chances for different items
var dict = {
    "common1":94.3,
    "rare":5.1,
    "ultra rare":0.6
}

function pull(n){
    //show the results of the pull
    var screen = document.getElementById("gacha-anim")
    screen.style.display = "block"
    disableScroll()
    var row = document.getElementById("item-display-row")
    var openAnim = document.getElementById("open-anim")
    openAnim.style.display = "block"
    var src = "https://lottie.host/81fe254e-8e25-44b3-a723-fcfe68b7b916/psA9kkEEVW.json"
    openAnim.load(src)
    setTimeout(function(){
        for (var i = 0; i < n; i++){
            var chance = Math.floor(Math.random() * 10000)*0.01
            var push = 0
            var rarity = ""
            //iterate through dictionary
            for (const [key, value] of Object.entries(dict)) {
                //check which chance bracket the random value belongs to
                if (chance < push+value){
                    rarity = key
                    break
                }
                push += value
            }

            //display the items with a border for rarity
            if (rarity == "ultra rare"){
                //rainbowq border for ultra rare
                row.innerHTML += `<div style = "border: 5px solid transparent;
                                                border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
                                                border-image-slice: 1;">
                                                </div>`
            } else if (rarity == "rare"){
                //purple border for rare
                row.innerHTML += `<div style = "border-color:#A020F0" class = "fade-in"></div>`
            }else{
                //white border for common
                row.innerHTML += `<div style = "border-color:white" class = "fade-in"></div>`
            }
        }
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
    }, 2000)
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
