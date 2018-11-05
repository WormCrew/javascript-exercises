function shiftLetter(b,c){
    if(b.match(/[A-Z]/)){
        var code=(b.charCodeAt(0) + c);
        if (c>0){
        while (code>90){code = code-26}
        } else {
            while (code<65){code=code+26}
        }
    } else if(b.match(/[a-z]/)){
        var code=(b.charCodeAt(0) + c);
        if (c>0){
        while (code>122){code = code-26}
        } else {
            while(code<97){code=code+26}
        }
    } else {return b}
    return String.fromCharCode(code)
}

const caesar = function(word, shift) {
    return word.split('').map(a=>shiftLetter(a,shift)).join('')
}

module.exports = caesar
