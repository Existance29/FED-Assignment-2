window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader_div_d');
    preloader.classList.add('preloader_animation_hide');
});

document.addEventListener('DOMContentLoaded', (event) => {
    function adjustHeaderOnScroll() {
        const header = document.getElementById("header");
        const introSection = document.querySelector('.intro-video');
        const introHeight = introSection.offsetHeight;
        const fromTop = window.scrollY;

        if (fromTop > introHeight) {
            header.style.backgroundColor = "#1E2532"; // White background after scrolling past intro
            header.style.transition = "background-color 1s ease"; // Smooth transition
        } else {
            header.style.backgroundColor = "rgba(0,0,0,0)"; // Transparent background initially
        }
    }

    window.addEventListener('scroll', adjustHeaderOnScroll);
    adjustHeaderOnScroll(); // Run it on load in case the page is reloaded with a scroll
});