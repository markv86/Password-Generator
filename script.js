// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Choices for password generation

//   PROMPTS    

function clickme() {
  alert("Are you ready to generate a new password?");
  alert("Let do this!!!");
  
    var howmany = prompt("How many digits will this undefeatable password contain? (8-128)");
    console.log(howmany)
   
    if (howmany <= 8 || howmany >= 128) {
      alert ('Please try again');
      prompt('You did not follow directions! Please choose a number between 8 - 128! ');
    }

    var upperCase = confirm('Would you like to use UPPER case letters"');
    // console.log(upperCase)
    
    var lowerCase = confirm('Would you like to use lower case letters?');  
    // console.log(lowerCase)
   
    var specialCharacters = confirm('Would you like to use $P3C!@| Characters?');
    // console.log(specialCharacters)
    
    var integers = confirm('Would you like to use numbers?');
    // console.log(integers)
    

    var upperSelection = ['A','B','C','D','E','F','G','H','I','F','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var lowerSelection = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var numbers = ['0','1','2','3','4','5','6','7','8','9']
    var specialSelection = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

    //     END OF PROMPTS
  
    //     Push options to an array
    var chosenCharacter = []

    //    If conditions for user input to be used for randomizer

    if(upperCase){
    //  console.log(upperSelection)
    var chosenCharacter = chosenCharacter.concat(upperSelection);
    console.log(chosenCharacter)
    }
    if(lowerCase){
      // console.log(lowerSelection)
      var chosenCharacter = chosenCharacter.concat(lowerSelection);
    console.log(chosenCharacter)
    }
    if(integers){
      // console.log(numbers)
      var chosenCharacter = chosenCharacter.concat(numbers);
    console.log(chosenCharacter)
    }
    if(specialCharacters){
      // console.log(specialSelection)
      var chosenCharacter = chosenCharacter.concat(specialSelection);
    console.log(chosenCharacter)
    }

    //  Random Password String

    var randomstring = ''
      for (var i=0; i<howmany; i++) {
        var rnum = Math.floor(Math.random() * chosenCharacter.length);
        randomstring += howmany.substring(rnum,rnum+1);
        console.log(randomstring)

      }













}
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
