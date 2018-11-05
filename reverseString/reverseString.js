<<<<<<< HEAD
const reverseString = function(word) {
    var splitString = word.split("")
    var reversedString = ""
    for (i=word.length;i>0;i--){
        reversedString = reversedString + splitString[i-1]

    }
    return(reversedString)
}

module.exports = reverseString

console.log(reverseString('hello'));
console.log(reverseString('hello there'));
console.log(reverseString('123! abc!'));
=======
const reverseString = function(word) {
    var splitString = word.split("")
    var reversedString = ""
    for (i=word.length;i>0;i--){
        reversedString = reversedString + splitString[i-1]

    }
    return(reversedString)
}

module.exports = reverseString

console.log(reverseString('hello'));
console.log(reverseString('hello there'));
console.log(reverseString('123! abc!'));
>>>>>>> 9e1798000b696c64ba6837c3e79f1705328e9568
