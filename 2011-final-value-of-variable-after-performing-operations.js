/*
There is a programming language with only four operations and one variable X:

    ++X and X++ increments the value of the variable X by 1.
    --X and X-- decrements the value of the variable X by 1.

Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

var finalValueAfterOperations = function (operations) {
    let output = 0;
    operations.forEach(operation => {
        if (operation === "X++" || operation === "++X") {
            output++;
        }
        else {
            output--;
        }
    })
    return output;
};

finalValueAfterOperations(["--X", "X++", "X++"]); // 1
finalValueAfterOperations(["++X", "++X", "X++"]); // 3
finalValueAfterOperations(["X++", "++X", "--X", "X--"]); // 0