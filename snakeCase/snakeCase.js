<<<<<<< HEAD
const snakeCase = function(str) {
    strArray=str.split(/[^A-Za-z]/).filter(Boolean)
    for(i=0;i<strArray.length;i++){
        if(strArray[i].charAt(0).match(/[a-z]/)){
            for (ix=1;ix<strArray[i].length;ix++){
                if(strArray[i].charAt(ix).match(/[A-Z]/)){
                    strArray[i]=strArray[i].slice(0,ix) + '_' + strArray[i].slice(ix).toLowerCase();
                }
            }
        } 
    }
    var newStr = strArray.join('_').toLowerCase();
    return newStr

}

module.exports = snakeCase
=======
const snakeCase = function(str) {
    strArray=str.split(/[^A-Za-z]/).filter(Boolean)
    for(i=0;i<strArray.length;i++){
        if(strArray[i].charAt(0).match(/[a-z]/)){
            for (ix=1;ix<strArray[i].length;ix++){
                if(strArray[i].charAt(ix).match(/[A-Z]/)){
                    strArray[i]=strArray[i].slice(0,ix) + '_' + strArray[i].slice(ix).toLowerCase();
                }
            }
        } 
    }
    var newStr = strArray.join('_').toLowerCase();
    return newStr

}

module.exports = snakeCase
>>>>>>> 9e1798000b696c64ba6837c3e79f1705328e9568
