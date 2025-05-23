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

// Age counter
const updateAge = () => {
    const birthDate     = new Date("2000-02-03");
    const birthDay      = birthDate.getDate();
    const birthMonth    = birthDate.getMonth() + 1;
    const birthYear     = birthDate.getFullYear();

    const currentDate   = new Date();
    const currentDay    = currentDate.getDate();
    const currentMonth  = currentDate.getMonth() + 1;
    const currentYear   = currentDate.getFullYear();

    if (birthMonth <= currentMonth && birthDay <= currentDay) {
        let age = currentYear - birthYear;
        document.getElementById("age").textContent = `Age: ${age} | Born on the 3rd of February, 2000`;

        return;
    }
};

updateAge(); // Run it once on load