const repeatString = function(string, count) {
    let res = '';
    if (count < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < count; i++) {
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
