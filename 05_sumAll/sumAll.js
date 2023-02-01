const sumAll = function(a, b) {
    let total = 0
    if (a < 0 || (typeof a) !== "number" || (typeof b) !== "number") return "ERROR"
    else if (a > b){
        let c = a
        a = b
        b = c
    }

    for (i = a; i <= b; i++) {
        total += i
    }
    
    console.log(total)
    return total
};

// Do not edit below this line
module.exports = sumAll;
