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
    window.location.href = "/index.html";
  }
  if (username.length == 0) {
    let require = "username is required";
    document.getElementById("loginNameRequired").innerText = require;
    document.getElementById("loginNameRequired").style.color = "red";
  }
  if (username.length > 0) {
    document.getElementById("loginNameRequired").innerText = "";
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

  let name = parsedCredentials.username;

  let words = name.split(" ");

  let dp = words
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  document.getElementById("userDP").innerHTML = dp;

  /* api call */
  async function first() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchData() {
    try {
      ans = await first();
      const userData = ans.data;

      const dashboardContainer = document.getElementById("dashboardContainer");
      // const dashboardContainer = document.getElementById("dashboardContainer");

      userData.map((i) => {
        const profilePic = document.createElement("img");
        const userName = document.createElement("p");
        const userEmail = document.createElement("p");
        const details = document.createElement("div");
        userName.textContent = `${i.first_name} ${i.last_name}`;
        userEmail.textContent = i.email;
        details.style.border = "1px solid black";
        details.style.height = "280px";
        details.style.display = "flex";
        details.style.flexDirection = "column";
        details.style.alignItems = "center";
        details.style.padding = "10px";
        userName.style.fontWeight = "bold";
        userEmail.style.margin = "10px";
        details.style.borderRadius = "10px";

        profilePic.setAttribute("src", i.avatar);
        profilePic.style.marginTop = "20px";

        profilePic.setAttribute("height", "160px");
        profilePic.setAttribute("width", "160px");
        profilePic.setAttribute("border", "2px solid green");
        profilePic.setAttribute("alt", i.first_name);

        details.appendChild(userName);
        details.appendChild(userEmail);
        details.appendChild(profilePic);
        dashboardContainer.appendChild(details);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  fetchData();
}

function logout() {
  window.location.href = "/register.html";
}

/* Ajax Register page validatoin */
$(document).ready(function () {
  $("#username").blur(function () {
    let username = document.getElementById("username").value;
    if (username.length < 3) {
      let require = "name should contain atleast 3 characters";
      document.getElementById("nameRequired").innerText = require;
      document.getElementById("nameRequired").style.color = "red";
    }
    if (username.length >= 3) {
      document.getElementById("nameRequired").innerText = "";
    }
    if (username.length == 0) {
      let require = "username is required";
      document.getElementById("nameRequired").innerText = require;
      document.getElementById("nameRequired").style.color = "red";
    }
  });
  $("#password").blur(function () {
    let password = document.getElementById("password").value;
    if (password.length < 4) {
      let require = "password is required";
      document.getElementById("passwordRequired").innerText = require;
      document.getElementById("passwordRequired").style.color = "red";
    }
    if (password.length >= 4) {
      document.getElementById("passwordRequired").innerText = "";
    }
    if (password.length > 0 && password.length < 4) {
      let require = "password should contain min 4 characters";
      document.getElementById("passwordRequired").innerText = require;
      document.getElementById("passwordRequired").style.color = "red";
    }
  });

  $("#confirmPassword").blur(function () {
    let confirmPassword = document.getElementById("confirmPassword").value;
    let password = document.getElementById("password").value;

    if (confirmPassword.length == 0) {
      let require = "confirm password is required";
      document.getElementById("confirmPassRequired").innerText = require;
      document.getElementById("confirmPassRequired").style.color = "red";
    }
    if (confirmPassword.length != 0 && password != confirmPassword) {
      let require = "password do not match";
      document.getElementById("confirmPassRequired").innerText = require;
      document.getElementById("confirmPassRequired").style.color = "red";
    }
    if (confirmPassword == password) {
      document.getElementById("confirmPassRequired").innerText = "";
    }
  });
});
