<<<<<<< HEAD
const palindromes = function(str) {
    var newStr =str.replace(/[^A-Za-z]/gi, '').toLowerCase();
    return newStr.split('').reverse().join('') == newStr;
}

 
module.exports = palindromes
=======
const palindromes = function(str) {
    var newStr =str.replace(/[^A-Za-z]/gi, '').toLowerCase();
    return newStr.split('').reverse().join('') == newStr;
}

 
module.exports = palindromes
>>>>>>> 9e1798000b696c64ba6837c3e79f1705328e9568
