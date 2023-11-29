const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%^&*()_+-=<>/|~{}[]";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += getRandomCharacter(upperCase);
  password += getRandomCharacter(lowerCase);
  password += getRandomCharacter(number);
  password += getRandomCharacter(symbol);

  while (length > password.length) {
  password += getRandomCharacter(allChars);
  }

  function getRandomCharacter(characterSet) {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  passwordBox.value = password;
}


function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}