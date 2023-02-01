const repeatString = function(str, num) {
    let newStr = ""

    if (num < 0) newStr = "ERROR"
    else {
        for(let i = 1; i <= num; i++) {
          newStr += str
        }

        // return newStr
    }

    return newStr
};

// Do not edit below this line
module.exports = repeatString;
