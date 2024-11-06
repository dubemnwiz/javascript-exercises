const sumAll = function(val1, val2) {
    let total = 0;

    if (val1 < 0 || val2 < 0 || 
        val1 != Math.floor(val1) || val2 != Math.floor(val2) || 
        typeof val1 === 'string' || typeof val2 === 'string') {
        return 'ERROR';
    }

    if (val1 > val2) {
        for (let i = val1; i >= val2; i--) {
            total += i;
        }
    } else {

        for (let i = val1; i <= val2; i++) {
            total += i;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
