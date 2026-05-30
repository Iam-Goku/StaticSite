// =========================================
// GLOBAL ELEMENTS (CACHE ONCE)
// =========================================
const themeToggle = document.getElementById("themeToggle");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const backToTopBtn = document.querySelector(".back-to-top");
const whatsappBtn = document.querySelector(".whatsapp-float");
const stickyLogo = document.getElementById("sticky-logo");

// =========================================
// THEME SYSTEM
// =========================================

function setTheme(mode) {
    const body = document.body;

    if (mode === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    }

    localStorage.setItem("theme", mode);
}

// Load theme (no flicker improvement)
(function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme === "light" ? "light-mode" : "dark-mode");
})();

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark-mode");
        setTheme(isDark ? "light" : "dark");
    });
}

// =========================================
// MOBILE MENU
// =========================================

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle("active");
    });

    // close menu on link click (UX improvement)
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // close on outside click
    document.addEventListener("click", (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove("active");
        }
    });
}

// =========================================
// SCROLL UI HANDLER (OPTIMIZED)
// =========================================

function handleScrollUI() {
    const show = window.scrollY > 200;

    if (backToTopBtn) backToTopBtn.style.display = show ? "block" : "none";
    // if (whatsappBtn) whatsappBtn.style.display = show ? "block" : "none";
    if (stickyLogo) stickyLogo.style.display = show ? "block" : "none";
}

window.addEventListener("scroll", handleScrollUI);

// =========================================
// BACK TO TOP
// =========================================

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// =========================================
// CONTACT FORM (EMAILJS SAFE)
// =========================================

const contactForm = document.getElementById("contact-form");

if (contactForm && typeof emailjs !== "undefined") {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_652um7a", "template_v4lmseg", this)
            .then(() => {
                alert("Message sent successfully!");
                contactForm.reset();
            })
            .catch(() => {
                alert("Failed to send message. Try again.");
            });
    });
}

// =========================================
// VIDEO MODAL (CLEAN VERSION - WORKING)
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("dynamicVideoFrame");

    if (!modal || !frame) return;

    document.querySelectorAll(".video-trigger").forEach(el => {

        el.addEventListener("click", function () {

            const video = this.getAttribute("data-video-src");

            if (!video) return;

            frame.src = video;

            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });

    });

    // close on background click
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        frame.src = "";
    }

});