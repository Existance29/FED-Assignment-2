var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    // Collapse the navbar by triggering the 'collapse' command if it is open
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapsible = document.getElementById('navbarNav');
    if (window.getComputedStyle(navbarToggler).display !== 'none' && !navbarToggler.classList.contains('collapsed')) {
      new bootstrap.Collapse(navbarCollapsible, {
        toggle: false
      }).hide();
    }
  
    /* if we're scrolling up, or we haven't passed the header,
       show the header at the top */
    if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
      headerDiv.style.top = "0";
    }
    else{
      /* otherwise we're scrolling down & have passed the header so hide it */
      headerDiv.style.top = "-70px";
    } 
  
    prevScrollpos = currentScrollPos;
  }



/*-----------*/
var LoginForm = document.getElementById("loginform");
var RegForm =document.getElementById("regform");
var Indicator = document.getElementById("indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {
    RegForm.style.transform = "translateX(500px)";
    LoginForm.style.transform = "translateX(500px)";
    Indicator.style.transform = "translateX(0px)";
}

/*Testing the API stuff*/