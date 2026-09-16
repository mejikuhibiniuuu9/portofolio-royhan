// =====================================
// LOADING SCREEN
// =====================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);

    }, 2200);

});


// =====================================
// MOBILE MENU
// =====================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Tutup menu saat link ditekan

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =====================================
// FOOTER YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================
// SCROLL ANIMATION
// =====================================

const animatedElements = document.querySelectorAll(
    ".project, .contact-card, .hero-card, .skill"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


// =====================================
// MOUSE PARALLAX SPIDER
// =====================================

const spider = document.querySelector(".spider-hero");

window.addEventListener("mousemove", event => {

    if (!spider) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    spider.style.transform =
        `translate(${x}px, ${y}px) translateY(-50%)`;

});


// =====================================
// SPIDER WEB CLICK EFFECT
// =====================================

document.addEventListener("click", event => {

    const effect = document.createElement("div");

    effect.className = "web-click";

    effect.style.left =
        event.clientX + "px";

    effect.style.top =
        event.clientY + "px";

    document.body.appendChild(effect);

    setTimeout(() => {

        effect.remove();

    }, 700);

});


// =====================================
// CONSOLE MESSAGE
// =====================================

console.log(
    "%c🕷 ROYHAN ZAHIR",
    "color:#e50914;font-size:25px;font-weight:bold;"
);

console.log(
    "%cSPIDER SYSTEM ONLINE",
    "color:#168cff;font-size:14px;"
);

console.log(
    "With great power comes great responsibility."
);