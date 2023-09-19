function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
   
}


// Optional: Stop the animation when the page loses focus
document.addEventListener("visibilitychange", function () {
    if (document.visible) {
        document.querySelector(".carousel-inner").style.animationPlayState = "running";
    } else {
        document.querySelector(".carousel-inner").style.animationPlayState = "running";
    }
});

