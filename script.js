// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Simple welcome message in console

console.log("Welcome to Versha Narwal's Portfolio");
// typing animation
const words = [
    "Aspiring Data Analyst",
    "Python Developer",
    "SQL Enthusiast",
    "Power BI Developer",
    "Continuous Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent =
            currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// =============================
// Dark / Light Mode Toggle
// =============================

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";

    }

});