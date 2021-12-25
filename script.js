// Created a variable for the element "button" 
var generateBtn = document.querySelector("#generate");


function writePassword() {
  // we're going to run the function generatePassword & save it to the variable password
  var password = generatePassword();
  // here we'll grab the element with the ID password & save it to the variable passwordText
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// variables to hold all the characters
// Everything thats going to happen when the generate password button is called"
function generatePassword() {
  var lowercase="abcdefghijklmnopqrstuvwxyz"
  var uppercase=lowercase.toUpperCase()
  var numeric="0123456789"
  var special="!@#$%^&*()-_=+,./;'?"
  console.log(special.length); //20
  var base="" //starting point 