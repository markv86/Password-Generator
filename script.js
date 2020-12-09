// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Choices for password generation

// var upperSelection = 'ABCDEFGHIFJKLMNOPQRSTUVWXYZ'
// var lowerSelection = 'abcdefghijklmnopqrstuvwxyz'
// var numbers = '0123456789'
// var specialSelection = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'


//   PROMPTS    

function clickme() {
  alert("Are you ready to generate a new password?");
  alert("Let do this!!!");
  
    var howmany = prompt("How many digits will this undefeatable password contain? (8-128)");
   
    if (howmany <= 8 || howmany >= 128) {
      alert ('Please try again');
      prompt('You did not follow directions! Please choose a number between 8 - 128! ');
    }

    var upperCase = confirm('Would you like to use UPPER case letters"');
    
    var lowerCase = confirm('Would you like to use lower case letters?');  
   
    var specialCharacters = confirm('Would you like to use $P3C!AL Characters?');
    
    var integers = confirm('Would you like to use numbers?');
    
  }
//     END OF PROMPTS
  







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
