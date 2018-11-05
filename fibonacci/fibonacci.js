const fibonacci = function(number) {
    number = parseInt(number)
    if((typeof (number) !='number')||(number <1)){
        return 'OOPS'
    }
    var arr = [1,1]
    for(i=2;i<number;i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[number-1]
}

module.exports = fibonacci
