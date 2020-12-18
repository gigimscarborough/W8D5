const readline = require('readline');
const { callbackify } = require('util');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function absurdBubbleSort(arr, sortCompletionCallback)

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, (response) => {
        if (response === 'yes') {
            return callback(true);
        }else {
            return callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
            if (isGreaterThan === true) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            else{
                madeAnySwaps = false;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        });
    }
    if (i == (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    outerBubbleSortLoop(true);
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps === true){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        }
        else {
            sortCompletionCallback(arr);
        }
    }
}


absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});
