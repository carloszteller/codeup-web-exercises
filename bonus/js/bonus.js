/*
* Write a function that uses a loop to console.log "99 bottles of beer on the wall" until the passed argument number.
* Use a break to exit the loop, and console.log the message "Aw no, we're not doing that song again," in the event the
* argument is a number greater than 99, less than 0, or is not a number.
* */
function ninetyNineBottles() {
    for(i = 99; i >= 0; i--) {
        if(i === 0) {
            break;
        } else if(i === 1) {
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take it down, pass it around, no bottles of beer on the wall.");
        } else {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take 1 down, pass it around, " + (i - 1) + " bottles of beer on the wall.");
        }
    }

    console.log("Aw no, we're not doing that song again!");
}
ninetyNineBottles();

/*
* Write a loop that will console.log hexadecimal numbers until it reaches 'FF'. Take a look at this stackoverflow post
* for information on converting decimal numbers to hexadecimal.
* */
for(var i = 0; i <= 15; i++) {
    console.log((i >= 10) ? i.toString(16).toUpperCase() : i);
}

/*
* Write a loop that prompts the user to confirm if they have drank water today. This loop should run until the user has
* confirmed the prompt (clicked yes) 6 times.
* */
var count = 0;

do {
    var userConfirm = confirm('Have you drank water today?');

    if(userConfirm === true)
        count++;
} while(count < 6);