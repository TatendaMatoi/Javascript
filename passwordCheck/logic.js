let userName = prompt(
  "Hello, can you please enter your Name below and click ok."
);

let password = prompt(
  `Greetings ${userName}, May you kindly enter your password below.`
);

while (password.includes(userName)) {
  password = prompt(
    `Greetings ${userName}, May you kindly choose a password that does not include your username.`
  );
}

alert("Password is valid");
