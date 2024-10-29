// Load and apply theme from localStorage
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme") || "light";

    document.body.classList.add(savedTheme + "-mode");
    themeToggle.checked = savedTheme === "dark";

    themeToggle.addEventListener("change", () => {
        const newTheme = themeToggle.checked ? "dark" : "light";
        
        document.body.classList.remove("light-mode", "dark-mode");
        document.body.classList.add(newTheme + "-mode");

        localStorage.setItem("theme", newTheme);
    });
});
