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
    if (password == confirmPassword) {
      let credentials = {
        username: username,
        password: password,
      };
      let stringCredentials = JSON.stringify(credentials);
      localStorage.setItem("credentials", stringCredentials);
      window.location.href = "/login.html";
    }
  }
  if (username.length < 3) {
    let require = "name should contain atleast 3 characters";
    document.getElementById("nameRequired").innerText = require;
    document.getElementById("nameRequired").style.color = "red";
  }
  if (username.length == 0) {
    let require = "username is required";
    document.getElementById("nameRequired").innerText = require;
    document.getElementById("nameRequired").style.color = "red";
  }
  if (password.length < 4) {
    let require = "password is required";
    document.getElementById("passwordRequired").innerText = require;
    document.getElementById("passwordRequired").style.color = "red";
  }
  if (confirmPassword.length < 4 && confirmPassword.length > 0) {
    let require = "confirm password is required";
    document.getElementById("confirmPassRequired").innerText = require;
    document.getElementById("confirmPassRequired").style.color = "red";
  }
  if (confirmPassword.length == 0) {
    let require = "confirm password is required";
    document.getElementById("confirmPassRequired").innerText = require;
    document.getElementById("confirmPassRequired").style.color = "red";
  }
  if (password.length > 0 && password.length < 4) {
    let require = "password should contain min 4 characters";
    document.getElementById("passwordRequired").innerText = require;
    document.getElementById("passwordRequired").style.color = "red";
  }
  if (password != confirmPassword) {
    let require = "password do not match";
    document.getElementById("confirmPassRequired").innerText = require;
    document.getElementById("confirmPassRequired").style.color = "red";
  }
}

/* login */
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let credentials = localStorage.credentials;

  const parsedCredentials = JSON.parse(credentials);

  if (
    username == parsedCredentials.username &&
    password == parsedCredentials.password
  ) {
    window.location.href = "/home.html";
  }
  if (username.length == 0) {
    let require = "username is required";
    document.getElementById("loginNameRequired").innerText = require;
    document.getElementById("loginNameRequired").style.color = "red";
  }
  if (password.length == 0) {
    let require = "password is required";
    document.getElementById("loginPassRequired").innerText = require;
    document.getElementById("loginPassRequired").style.color = "red";
  }
  if (username.length != 0 && password.length != 0) {
    document.getElementById("loginNameRequired").innerText = "";
    document.getElementById("loginPassRequired").innerText = "";

    if (
      username != parsedCredentials.username ||
      password != parsedCredentials.password
    ) {
      let noMatch = "Username and Password didn't match";
      document.getElementById("noMatch").innerText = noMatch;
      document.getElementById("noMatch").style.color = "red";
    }
  }
}

/* home */
function home() {
  let credentials = localStorage.credentials;
  const parsedCredentials = JSON.parse(credentials);

  console.log(parsedCredentials.username);

  let name = parsedCredentials.username;

  let words = name.split(" ");

  let dp = words
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  document.getElementById("userDP").innerHTML = dp;
}

function logout() {
  window.location.href = "/login.html";
}
