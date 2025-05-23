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
const birthDate = new Date("2000-02-03");

const updateAge = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    // const year = now.getFullYear;

    if (birthDate.getMonth() <= month && birthDate.getDay() <= day) {
        let age = 24 + 1;
    
        //age = age + 1;
        document.getElementById("age").textContent = `Age: ${age} | Born on the 3rd of February, 2000`;

        return;
    }
};

updateAge(); // Run it once on load