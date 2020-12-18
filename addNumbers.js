const readline = require('readline');
const { callbackify } = require('util');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        return completionCallback(sum);
        reader.close()
    }
    else {
        reader.question("Put in the number kid!", (response) => {
            let nextNum = parseInt(response) + sum;
            console.log(nextNum);
            addNumbers(nextNum, numsLeft - 1, completionCallback)
        });
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));