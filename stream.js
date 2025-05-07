document.addEventListener("DOMContentLoaded", function () {
    // Toggle active class for buttons
    const toggleButtons = document.querySelectorAll(".toggle-buttons button");
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            toggleButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Make broadcast input interactive
    const broadcastInput = document.querySelector(".broadcast-box input");
    broadcastInput.addEventListener("focus", function () {
        this.style.border = "2px solid #527DA3";
    });

    broadcastInput.addEventListener("blur", function () {
        this.style.border = "none";
    });
});
