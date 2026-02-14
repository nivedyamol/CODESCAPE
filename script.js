 // NAVBAR SCROLL + REVEAL
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#111827";
        navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }

    // Reveal animation
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

// SMOOTH SCROLL
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    });
});

// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", ()=> navLinks.classList.toggle("active"));

// TESTIMONIAL SLIDER
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-card");
function showTestimonial() {
    testimonials.forEach((t,i) => t.style.display = i===testimonialIndex?"block":"none");
    testimonialIndex = (testimonialIndex +1)%testimonials.length;
}
showTestimonial();
setInterval(showTestimonial,5000);

// STATS COUNTERS
const counters = document.querySelectorAll(".stat-card h3");
let counted = false;
window.addEventListener("scroll", function(){
    const statsSection = document.querySelector(".stats");
    if(statsSection && !counted){
        const top = statsSection.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            counters.forEach(counter=>{
                const updateCount = ()=>{
                    const target = +counter.getAttribute("data-target");
                    const current = +counter.innerText.replace("+","");
                    const increment = Math.ceil(target/100);
                    if(current < target){
                        counter.innerText = current + increment + "+";
                        setTimeout(updateCount, 20);
                    } else { counter.innerText = target+"+"; }
                }
                updateCount();
            });
            counted = true;
        }
    }
});

// SCROLL TO TOP BUTTON
const scrollBtn = document.createElement("div");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = "&#8679;";
document.body.appendChild(scrollBtn);
scrollBtn.addEventListener("click", ()=> window.scrollTo({top:0,behavior:"smooth"}));
window.addEventListener("scroll", ()=> {
    scrollBtn.style.display = window.scrollY>300?"block":"none";
});
