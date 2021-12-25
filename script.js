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


  var length=prompt("Choose a password length between 8-128 characters");
  if (length < 8 || length > 128 || isNaN(length)) {
    return "How did you mess this up already?"
  }
  var confirmUpper=confirm("Would you like to include uppercase characters?")
  if (confirmUpper==true) {
    base=base+uppercase 
    console.log(base)
  }
  var confirmLower=confirm("Would you like to include lowercase characters?")
  if (confirmLower==true) {
    base=base+lowercase
    console.log(base)
  }
  var confirmNumeric=confirm("Would you like to include a numeric character?")
  if (confirmNumeric==true) {
    base=base+numeric
    console.log(base)
  }
  var confirmSpecial=confirm("Would you like to include any special characters?")
  if (confirmSpecial==true) {
    base=base+special
    console.log(base)
  }

  if (confirmUpper == false && confirmLower == false && confirmNumeric == false && confirmSpecial == false) {
  return "I can't make lemonade without any lemons. Try again..."
}
  // forloop and loop through all characters in base
  // starting out with selecting the first character in base
  // console.log(base[0]);

  // default: math.random 0-1
  // we want only integers from 0 - base.length-1
  // this will select a random character within the base
  // base[Math.floor(Math.random()*base.length)];
  // console.log (base[Math.floor(Math.random()*base.length)]);

  // the number of loops will depend on the variable length
  // and pick one randomly with each iteration of the loop
  // if all are false one needs to be picked
  var pass="";
  for (var i=0; i < length; i++)