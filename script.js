// Assignment Code
// var generateBtn = document.querySelector("#generate");
// var upperSelection = (ABCDEFGHIFJKLMNOPQRSTUVWXYZ)
// var lowerSelection
// var numbers
// var specialSelection


//   PROMPTS    

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
    var upperCase = prompt('Would you like to use UPPER case letters"');
    console.log (upperCase);
    
    var lowerCase = prompt('Would you like to use lower case letters?');  
    console.log (lowerCase);

    var specialCharacters = prompt('Would you like to use $P3C!AL Characters?')
    console.log (specialCharacters);

//     END OF PROMPTS

  
    //at least one must be selected. redirect to prompts again if nothing is selected.
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