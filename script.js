document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor-circle");
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    let circleX = 0;
    let circleY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;

        cursor.style.left = circleX + "px";
        cursor.style.top = circleY + "px";

        requestAnimationFrame(animate);
    }

    animate();

    const nav = document.querySelector("nav");

    if (nav) {
        nav.addEventListener("mouseenter", () => {
            cursor.classList.add("dark");
        });

        nav.addEventListener("mouseleave", () => {
            cursor.classList.remove("dark");
        });
    }

    const allCards = document.querySelectorAll(".article-card, .news-card");

    allCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            cursor.classList.add("dark", "big");
        });

        card.addEventListener("mouseleave", () => {
            cursor.classList.remove("dark", "big");
        });
    });

    // animation apparition scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    allCards.forEach(card => observer.observe(card));

    // barre de progression
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (scrollTop / height) * 100;

        const bar = document.querySelector(".progress-bar");
        if (bar) bar.style.width = scrolled + "%";
    });

});

/* animations pour 'News' */
const newsLink = document.querySelector(".nav-news span");

if (newsLink) {
    newsLink.addEventListener("mouseenter", () => {
        newsLink.style.animation = "none";
    });

    newsLink.addEventListener("mouseleave", () => {
        newsLink.style.animation = "pulse-news 5s infinite";
    });
}

const zoomBtn = document.getElementById("zoom-btn");
const image = document.querySelector(".post-image");

if (zoomBtn && image) {

    zoomBtn.addEventListener("click", () => {
        image.classList.toggle("zoomed");
    });

}