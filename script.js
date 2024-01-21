/*JS FUNCTION FOR CONCEAL NAV BAR INTO VERTICAL NAV MENU FUNCTION*/
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else 
    {
        MenuItems.style.maxHeight = "0px";
    }
}



/*JS FUNCTION FOR HEADER BACKGROUND COLOR from transparent to white ON SCROLL FUNCTION*/
window.onscroll=function() {scrollFunction()};

function scrollFunction() {
    //account for different window sizes
    var transitionThreshold = 500
    //for smaller windows, trigger the transition sooner - lower threshold for transition
    if (window.innerWidth <= 600) {
        transitionThreshold = 150
    }
    //check if the user has scrolled past the threshold
    if (window.scrollY > transitionThreshold || document.documentElement.scrollTop > transitionThreshold) {
        //user has not scrolled past, set to white
        document.getElementById("header").style.backgroundColor = "rgba(26,30,38,0.9)";
    }
    else {
        document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)"; //set to transparent
    }

}



/*JS FUNCTION FOR AUTOMATIC SLIDESHOW SECTION*/
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}


/*Testing the API stuff*/