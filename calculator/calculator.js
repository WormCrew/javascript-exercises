function add (a,b) {
	return(a + b);
}

function subtract (a,b) {
	return(a-b);
}

function sum (a) {
	return a.length==0?0:a.reduce((b,c) => b+c);
	
}

function multiply (a) {
	return a.reduce((b,c)=>b*c);
}

function power(a,b) {
	return Math.pow(a,b);	
}

function factorial(a) {
	var result = 1;
    for(var i = 2; i<= a; i++) {
        result *= i;
    }
    return result; 
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}