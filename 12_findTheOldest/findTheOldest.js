const findTheOldest = function(arr) {
    const sorted = arr.sort((lastP, nextP) => {
        const a = lastP.yearOfDeath ? (lastP.yearOfDeath - lastP.yearOfBirth) : ((new Date().getFullYear()) - lastP.yearOfBirth);
        const b = nextP.yearOfDeath ? (nextP.yearOfDeath - nextP.yearOfBirth) : ((new Date().getFullYear()) - nextP.yearOfBirth);
        return a > b ? 1 : -1;
    })
    return sorted[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
