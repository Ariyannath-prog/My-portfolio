document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dark Mode Toggle
    const modeButton = document.querySelector("#mode");
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // Check for saved dark mode preference or use system preference
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const isDarkMode = savedMode !== null ? JSON.parse(savedMode) : prefersDark;

    // Initialize dark mode on page load
    if (isDarkMode) {
        enableDarkMode();
    }

    // Dark mode toggle event listener
    modeButton.addEventListener("click", () => {
        if (bodyElement.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        bodyElement.classList.add("dark-mode");
        modeButton.textContent = "Light";
        localStorage.setItem("darkMode", JSON.stringify(true));
    }

    function disableDarkMode() {
        bodyElement.classList.remove("dark-mode");
        modeButton.textContent = "Dark";
        localStorage.setItem("darkMode", JSON.stringify(false));
    }

    // Listen for system theme changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (localStorage.getItem("darkMode") === null) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
});