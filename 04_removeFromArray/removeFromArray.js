const removeFromArray = function(arr, val) {

    for (let i = 1; i < arguments.length; i++) {
        let newVal = arguments[i];
        let idx = arr.findIndex(checkVal);

        while (arr[idx] == newVal) {
            arr.splice(idx, 1);
        }

        function checkVal(v) {
            return v === newVal;
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
