function setPassword() {
  let password = prompt("Please select a password of 8 or more characters");
  while (password !== null && password.length < 8) {
    password = prompt(
      "Password is less than 8 characters. Please select a password of 8 or more characters"
    );
  }

  if (password === null) {
    document.getElementById("message").innerHTML =
      "Hello, Seems like you clicked Cancel, don't give up just yet. Try picking a password with more than 8 characters to secure your account 😊";
  } else {
    document.getElementById("message").innerHTML =
      "Hello, Password has been saved successfully. Redirecting to requested page.";
  }
}
