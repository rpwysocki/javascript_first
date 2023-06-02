
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];

var combined = [];



// parseInt converts a string into a number, + also works in place of number

//Confirm specials and numbers as well

// hello world


function responses() {
        var amount = Number(prompt('Please provide an amount characters.'));
        var includeLowercase = confirm('Click OK to include lowercase letters');
        var includeUppercase = confirm('Click OK to include uppercase letters');
        var includeNumbers = confirm('Click OK to include lowercase numbers');
        var includeSpecial = confirm('Click OK to include special characters');
        console.log(amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
        return { amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial };
}

var selections = [responses()];
console.log(selections);

var choices = getUserInput();



function generatePass() {
        var combinedChars = [];
        var password = '';

        var includeLowercase = choices[1]
        var includeUppercase = choices[2]
        var includeNumbers = choices[3]
        var includeSpecial = choices[4]


        if (includeLowercase) {
                combinedChars = combinedChars.concat(lowercase)
        }

        if (includeUppercase) {
                combinedChars = combinedChars.concat(uppercase)
        }

        if (includeNumbers) {
                combinedChars = combinedChars.concat(numbers)
        }

        if (includeSpecial) {
                combinedChars = combinedChars.concat(specialCharacters)
        }
        for (var count = 0; count < choices[0]; count++) {
                var randomIndex = Math.floor(Math.random() * combinedChars.length);

                password += combinedChars[randomIndex];
        }

}








// console.log


alert('Thank you for your input')

// function sum(a, b){
//         return a + b;
// }

// var result = sum(5, 10);
// console.log(result);
