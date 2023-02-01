const fibonacci = function(x) {
    if (Number(x) > 0) {
        let n1 = 0, n2 = 1, nextTerm;
        for(i = 1; i < Number(x); i++) {
            nextTerm = n1 + n2; 
            n1 = n2; 
            n2 = nextTerm; 
        }
        // console.log (nextTerm)
        return n2
    }
    else return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
