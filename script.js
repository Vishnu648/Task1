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
      document.getElementById("confirmPassword").value = "";
      window.location.href = "/login.html";
    }
  } else if (
    // username.length <= 1 ||
    password.length <= 3 ||
    confirmPassword.length <= 3
  ) {
    alert('password should be atleast 4 characters');
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
  } else if (
    username != parsedCredentials.username ||
    password != parsedCredentials.password
  ) {
    alert("UserName and Password don't match");
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
