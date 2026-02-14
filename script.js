window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#111827";
        navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
})