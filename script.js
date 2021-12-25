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
