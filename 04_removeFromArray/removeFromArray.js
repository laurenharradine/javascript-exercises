const removeFromArray = function(arr) {
    // let newArr = []
    for (var i = 0; i < arguments.length; i++)
    {
        arr = arr.filter(x => x !== arguments[i])
    }
    console.log(arr)
    return arr        
};

// Do not edit below this line
module.exports = removeFromArray;
