// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "'", "?", "[", "{", "]", "}", ",", ";", ":",];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var possibleChar = [];

//Creating Password Generator function
function generatePassword(){ 

//The following code block gathers the input from the user and validates what they are entering with them
  numberofCharacters = prompt("How long would you like your password to be? Please choose between 8 and 128 characters.");
  if (numberofCharacters < 8 || numberofCharacters > 128) {
    numberofCharacters = prompt("Error: Please Choose a number between 8 and 128."); //Alerts user they have picked a number >8 and <128
  } else if (isNaN(numberofCharacters)) {
    numberofCharacters = prompt("Error: Please enter a valid number."); //Alerts user they have entered a letter or special character
  }
  else {
    alert("Your password will have " + numberofCharacters + " characters.");
  }

  hasNumbers = confirm("would you like numbers in your password?");
  if (hasNumbers) {
    alert("Password will have numbers.");
  }
  else {
    alert("Password will not have numbers.");
  }

  hasSpecial = confirm("would special characters please you?");
  if (hasSpecial) {
    alert("Password will have special Characters.");
  }
  else {
    alert("Password will not have special characters.");
  }

  hasUppercase = confirm("Would you care for UPPERCASE letters?");
  if (hasUppercase) {
    alert("Password will have UPPERCASE letters.");
  }
  else {
    alert("Your password will not have UPPERCASE letters.");
  }

  hasLowercase = confirm("Could I interest you in any lowercase letters?");
  if (hasLowercase) {
    alert("Password will have lowercase letters");
  }
  else {
    alert("Password will not have lowercase letters");
  }

  //This will return when a user does not select any criteria after the length... just for fun
  if (hasNumbers === false && hasSpecial === false && hasUppercase === false && hasLowercase === false) {
    return "It's ok if you don't need a password :). Thanks for visitiing";
  };

//This code block begins to put the password together. Using the concat method to create new possible character arrays
  if (hasNumbers) {
    possibleChar = possibleChar.concat(numbers);
  }

  if(hasSpecial) {
    possibleChar = possibleChar.concat(specialChar);
  }

  if (hasUppercase) {
    possibleChar = possibleChar.concat(uppercaseChar);
  }

  if (hasLowercase) {
    possibleChar = possibleChar.concat(lowercaseChar);
  }

//This code block will begin to randomly put together our password from the new lot and our given password length
  let lastPass = ""
  for (let i = 0; i < numberofCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleChar.length)];
    lastPass += possibleChar[rng];
  }
  return lastPass;//Returns the users criteria met password 

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
