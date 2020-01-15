// Assignment Code
var generateBtn = document.querySelector("#generate");
// Identify and assign variables to the potential characters that may be used in password
var validUpperInputs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var validLowerInputs = "abcdefghijklmnopqrstuvwxyz"
var validSpecialInputs = "!#%&()*+,-./:;<=>?@[\]^_`{|}~"
// This function creates the password with a do-while loop to verify length then conditional statements to add/eliminate characters for password criteria.
function generatePassword() {
  var passLength = "";
  do { var passLength = prompt("Choose a password length between 8-128")}
  while (passLength <8 || passLength > 128); 
  var passSpecial = confirm("Would you like special character(s) for your password");
  var passLower1 = confirm("Would you like lower case letters for your password"); 
  var passUppper1 = confirm("Would you like upper case letters for your password");
  
  var availableChar = "";
  var password = [];

   
  if (passSpecial){
      var newChar = validSpecialInputs.charAt(Math.floor(Math.random() * validSpecialInputs.length))
      password.push(newChar)
      availableChar+=validSpecialInputs;
  }
  if (passLower1){
    var newChar = validLowerInputs.charAt(Math.floor(Math.random() * validLowerInputs.length))
    password.push(newChar)
    availableChar+=validLowerInputs;
}
  if (passUppper1){
    var newChar = validUpperInputs.charAt(Math.floor(Math.random() * validUpperInputs.length))
    password.push(newChar)
    availableChar+=validUpperInputs;
}

  if (!availableChar){
    alert("You must select atleast one condition")
    generatePassword()
  }


  while (password.length < parseInt(passLength)){
    var newChar = availableChar.charAt(Math.floor(Math.random() * availableChar.length)) 
    password.push(newChar);
  }

console.log(password);
// if user confirms passSpecial||passLower1||passUpper1 then continue to generate password. 
// if all = false then alert user that one must be selected and run generatepassword function again.

  return password.join("")



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
