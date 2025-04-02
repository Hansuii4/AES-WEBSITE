document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButtons = document.querySelectorAll("[data-bs-theme-value]");
    const body = document.body;

    function setTheme(theme) {
        console.log("Setting theme to:", theme); // Debugging
        body.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }

    // Load the saved theme from localStorage or detect system preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Detect system preference using matchMedia
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        console.log("System prefers:", defaultTheme); // Debugging
        setTheme(defaultTheme);
    }

    themeToggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedTheme = this.getAttribute("data-bs-theme-value");
            console.log("Button clicked. Selected theme:", selectedTheme); // Debugging
            setTheme(selectedTheme);
        });
    });
});



