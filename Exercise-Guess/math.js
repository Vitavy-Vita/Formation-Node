const generateRandomNum = function(min, max){
    const randomNum = Math.floor(Math.random()*(max-min+1)-min)
    console.log(randomNum)
    return randomNum
}

exports.generateRandomNum = generateRandomNum;