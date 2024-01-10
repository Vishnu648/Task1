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
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirmPassword").value = "";
      window.location.href = "/login.html";
    }
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
}

/* home */
function home() {
  let credentials = localStorage.credentials;
  const parsedCredentials = JSON.parse(credentials);

  console.log(parsedCredentials.username);

  let name = parsedCredentials.username;

  let words = name.split(" ");

  let dp = words.map((word) => word[0]).join("").slice(0,2);

  document.getElementById("userDP").innerHTML = dp;

}

function logout() {
  window.location.href = "/login.html";
}