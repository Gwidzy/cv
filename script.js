document.addEventListener("DOMContentLoaded", () => {
    // Select all nav links
    const navLinks = document.querySelectorAll(".navButtons a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // Prevents default link behavior
            const href = link.getAttribute("href");

            // Add fade-out effect
            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            // Delay navigation until fade-out is complete
            setTimeout(() => {
                window.location.href = href;
            }, 600);  // Matches fade-out duration
        });
    });
});
