/* register */
function register() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (
    username.length > 1 &&
    password.length > 3 &&
    confirmPassword.length > 3
  ) {
    window.location.href = "/login.html";
  }
}

/* login */
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
}
