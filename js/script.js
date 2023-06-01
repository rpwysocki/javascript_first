// var students = ['John', 'FSF', 'Jamil', 'FSF', 'Roman', 'FSF'];




// for (var index = 0; index < students.length; index++) {
//     console.log('Nmae:', students[index])
//     console.log('Course:', students[index + 1])
// }

// function printStudentInfo() { 
//         console.log('Nmae:', students[index])
//         console.log('Course:', students[index + 1])
//}

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];


// var random = Math.random();
        var combined = lowercase.concat(uppercase).concat(numbers).concat(specialCharacters);
        var amount = 50;
        var password = '';
        // var randomIndex = 10;
// function randomLowercaseLetters(amount) {

// }
//   var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz';


for (var count = 0; index < amount; count++)
        var randomNum = Math.random()
        var ranIndex = Math.floor(Math.random() * combined.length);
        password += combined[randomIndex]
      
console.log(password);

document.body.innerText = password;