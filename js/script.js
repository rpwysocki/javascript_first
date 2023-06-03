
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];





// parseInt converts a string into a number, + also works in place of number

//Confirm specials and numbers as well

// hello world


function getUserInput() {

        var amount = Number(prompt('Please provide an amount characters.'));

        var includeLowercase = confirm('Click OK to include lowercase letters');
        var includeUppercase = confirm('Click OK to include uppercase letters');
        var includeNumbers = confirm('Click OK to include lowercase numbers');
        var includeSpecial = confirm('Click OK to include special characters');

        console.log(amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial);

        return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial];
}

// var choices = [getUserInput()];
// console.log(choices);
// getUserInput()
var choices = getUserInput();

// Generate a random password
// functions, conditionals, variables, for loops, concatenation (+ & +=), .concat

// user input, return a var, math

function generatePass() {

        // var combinedChars = [];
        var password = '';

        var charAmount = choices[0]
        var includeLowercase = choices[1];
        var includeUppercase = choices[2];
        var includeNumbers = choices[3];
        var includeSpecial = choices[4];
        var combinedChars = [];

        if (includeLowercase) {
                combinedChars = combinedChars.concat(lowercase);
        }

        if (includeUppercase) {
                combinedChars = combinedChars.concat(uppercase);
        }

        if (includeNumbers) {
                combinedChars = combinedChars.concat(numbers);
        }

        if (includeSpecial) {
                combinedChars = combinedChars.concat(specialCharacters);
        }
        console.log(combinedChars);

}

for (var count = 0; count < choices[0]; count++) {
        var randomNum = Math.random();
        var randomIndex = Math.floor(randomNum * combinedChars.length);
        var randomChar = combinedChars[randomIndex];

        // pass += randomChar;
}

// return password;

generatePass();

// var password = generatePass();

// console.log(pass);
// what's missing here?











alert('Thank you for your input');

