let emailField = document.getElementById("email_field")
let passwordField = document.getElementById("password_field")
let signInBtn = document.getElementById("signInBtn")
let loginDiv = document.getElementById("login")


signInBtn.onclick = (e) => {
    e.preventDefault(); // Prevents form submission

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = storedUsers.find(user => user.email === emailField.value && user.password === passwordField.value);

    if (!emailField.value || !passwordField.value) {
        alert("Please check your information and try again!");
    } else if (foundUser) {
        alert("Welcome Back <3");
        window.location.href = "dashboard.html"; // Redirect to the homepage
    } else {
        alert("Incorrect email or password!");
    }
};

