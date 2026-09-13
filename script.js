const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("loginMessage");

        if (email && password) {
            message.textContent = "Login successful!";
            message.style.color = "#d4af37";

            setTimeout(() => {
                window.location.href = "home.html";
            }, 800);
        }
    });
}

function logout() {
    window.location.href = "index.html";
}