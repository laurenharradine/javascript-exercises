const palindromes = function (str) {
    let strReversed = str.split("")
                        .reverse()
                        .join("")
                        .toLowerCase()
                        .replace(/[.,\/#!$%\^ &\*;:{}=\-_`~()]/g,"");
   
    str = str.toLowerCase().replace(/[.,\/#!$%\^ &\*;:{}=\-_`~()]/g,"")
    
    console.log(`Original string: ${str}`)
    console.log(`Reversed string: ${strReversed}`)
    return strReversed === str ? true : false
};

// Do not edit below this line
module.exports = palindromes;
