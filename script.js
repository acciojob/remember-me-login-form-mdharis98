document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const existingUserBtn = document.getElementById("existing");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");

    // Check if user details are saved in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserBtn.style.display = "block";
    }

    // Handle form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
    });

    // Handle "Login as existing user" button click
    existingUserBtn.addEventListener("click", function () {
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
});
