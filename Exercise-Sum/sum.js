const sum = function(num){
    let sum = 0;
    for(let i=3; i<num; i++){
        if( i%3 === 0 || i%5 === 0){
            sum += i
        }
    }
    return sum
}

exports.sum = sum