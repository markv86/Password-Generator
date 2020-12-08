// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = (ABCDEFGHIFJKLMNOPQRSTUVWXYZ)
var lowerCase
var numbers
var specialCharacters

function clickme() {
  alert("Click")
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function promptMe(){
  let upperCase = prompt('Do you want to use UPPER case letters?')
}




// if else statements to take in input 