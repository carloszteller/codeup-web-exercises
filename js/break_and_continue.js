"use strict";

(function() {
    /*
    * Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the
    * user if they enter invalid input.
    *
    * Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the
    * user entered.
    *
    * Your output should look like this:
    * Number to skip is: 27
    *
    * Here is an odd number: 1
    * Here is an odd number: 3
    * Here is an odd number: 5
    * Here is an odd number: 7
    * Here is an odd number: 9
    * Here is an odd number: 11
    * Here is an odd number: 13
    * Here is an odd number: 15
    * Here is an odd number: 17
    * Here is an odd number: 19
    * Here is an odd number: 21
    * Here is an odd number: 23
    * Here is an odd number: 25
    * Yikes! Skipping number: 27
    * Here is an odd number: 29
    * Here is an odd number: 31
    * Here is an odd number: 33
    * Here is an odd number: 35
    * Here is an odd number: 37
    * Here is an odd number: 39
    * Here is an odd number: 41
    * Here is an odd number: 43
    * Here is an odd number: 45
    * Here is an odd number: 47
    * Here is an odd number: 49
    * */
    do {
        var userNumber = parseInt(prompt('Please enter an odd number between 1 and 50 you wish to skip.'));
    } while(userNumber % 2 === 0 || userNumber < 1 || userNumber > 50);

    console.log("Number to skip is: " + userNumber);

    for(var i = 1; i < 50; i++) {
        if(i === userNumber) {
            console.log("Yikes! Skipping number: " + userNumber);
            continue;
        } else if(i % 2 === 0) {
            continue;
        }

        console.log("Here is an odd number: " + i)
    }
})();