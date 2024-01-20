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
    if (window.innerWidth > 600) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("header").style.backgroundColor = "white";
    }
    else {
        document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
    }
    }
    else {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.backgroundColor = "white";
    }
    else {
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
    }
    }


}