// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var upperCase = (ABCDEFGHIFJKLMNOPQRSTUVWXYZ)
// var lowerCase
// var numbers
// var specialCharacters



function clickme() {
  alert("Are you ready to generate a new password?");
  alert("ok then");
  alert("Let do this!!!");
  var howmany = prompt("How many digits will this undefeatable password contain? (8-128)");
   console.log (howmany);
     if (howmany <= 8 || howmany >= 128) {
      alert ('Please try again');
      prompt('You did not follow directions! Please choose a number between 8 - 128! ');
     }
     else {
        prompt('Would you like to use UPPER case letter?');
      }
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