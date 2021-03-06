// Assignment Code
var generateBtn = document.getElementById("generate");
var checkLower = document.getElementById("allowLowercase");
var checkUpper = document.getElementById("allowUppercase");
var checkNumbers = document.getElementById("allowNumbers");
var checkSpecial = document.getElementById("allowSpecial");
var passwordLengthInput = document.getElementById("passwordLength");

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
    let passwordLength = passwordLengthInput.value;
    let allowedString = "";

    if (checkLower.checked) {
        allowedString += alphaLower;
    }
    if (checkUpper.checked) {
        allowedString += alphaUpper;
    }
    if (checkNumbers.checked) {
        allowedString += alphaNumer;
    }
    if (checkSpecial.checked) {
        allowedString += alphaSpecial;
    }
    let passString = "";
    if (allowedString === ""){
        alert("Please Choose Some Characters to be Allowed");
    } else {
        for (let i = 0; i < passwordLength; i++) {
            passString += allowedString[Math.floor(Math.random() * allowedString.length)]
            // console.log(passString);
        }
        console.log(passString);
        return passString;
    }
}