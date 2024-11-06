const reverseString = function(phrase) {
    let words = phrase.split("");
    words.reverse();
    return words.join('');
};

// Do not edit below this line
module.exports = reverseString;
