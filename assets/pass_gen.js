// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//constants
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaNumer = "1234567890";
var alphaSpecial =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//password generator
function generatePassword() {
    let passwordLength = parseInt(prompt("How Long Would You Like Your Password?"))
    let allowLower = confirm("Allow Lowercase?");
    let allowUpper = confirm("Allow Uppercase?");
    let allowNumber = confirm("Allow Numbers?");
    let allowSpecial = confirm("Allow Special Characters?");

    let allowedString = "";

    if (allowLower) {
        allowedString += alphaLower;
    }
    if (allowUpper) {
        allowedString += alphaUpper;
    }
    if (allowNumber) {
        allowedString += alphaNumer;
    }
    if (allowSpecial) {
        allowedString += alphaSpecial;
    }
    // console.log(allowedString);
    let passString = "";
    for (let i = 0; i < passwordLength; i++) {
        passString += allowedString[Math.floor(Math.random() * allowedString.length)]
        console.log(passString);
    }
    return passString;
}