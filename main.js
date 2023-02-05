var submitButton = document.getElementById("submit");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username === "admin" && password === "password") {
    window.location.href = "hello.html";
  } else {
    alert("Incorrect username or password.");
  }
});