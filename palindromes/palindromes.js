const palindromes = function(str) {
    var newStr =str.replace(/[^A-Za-z]/gi, '').toLowerCase();
    return newStr.split('').reverse().join('') == newStr;
}

 
module.exports = palindromes
