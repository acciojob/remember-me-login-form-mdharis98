//your JS code here. If required.
const loginForm = document.getElementById("loginForm");
        const existingUserBtn = document.getElementById("existing");
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const rememberMeCheckbox = document.getElementById("checkbox");

        // Check for existing user on page load
        window.onload = function () {
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingUserBtn.style.display = "inline";
            }
        };

        // Login form submission
        loginForm.onsubmit = function (e) {
            e.preventDefault();

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (rememberMeCheckbox.checked) {
                // Save to local storage
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                // Clear local storage if unchecked
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            alert(`Logged in as ${username}`);
            existingUserBtn.style.display = "inline";
        };

        // Existing user login button
        existingUserBtn.onclick = function () {
            const savedUsername = localStorage.getItem("username");
            if (savedUsername) {
                alert(`Logged in as ${savedUsername}`);
            }
        };