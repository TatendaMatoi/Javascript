let userName = prompt(
  "Hello, can you please enter your Name below and click ok."
);

while (userName === null) {
  userName = prompt(
    "You must enter a username. Please enter your Name below and click ok."
  );
}

let password = prompt(
  `Greetings ${userName}, May you kindly enter your password below.`
);

while (password === null || password.includes(userName)) {
  if (password === null) {
    password = prompt("You must enter a password. Please try again.");
  } else {
    password = prompt(
      `Greetings ${userName}, May you kindly choose a password that does not include your username.`
    );
  }
}

if (password !== null) {
  alert("Password is valid");
} else {
  alert("Password entry was cancelled.");
}
