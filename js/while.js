"use strict";

(function () {
    /*
    * Create a while loop that uses console.log() to create the output shown below.
    * 2
    * 4
    * 8
    * 16
    * 32
    * 64
    * 128
    * 256
    * 512
    * 1024
    * 2048
    * 4096
    * 8192
    * 16384
    * 32768
    * 65536
    * */
    var i = 2;

    while(i <= 65536) {
        console.log(i);
        i*=2;
    }

    /*
    * An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random
    * number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between
    * 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console
    * the amount of cones sold to each person. This is how you get the random numbers.
    * */
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        // This expression will generate a random number between 1 and 5
        var numCones = Math.floor(Math.random() * 5) + 1;

        if(numCones > allCones) {
            console.log("Cannot sell you " + numCones + " cones I only have " + allCones);
        } else {
            console.log(numCones + " cones sold...")
            allCones -= numCones;
        }
    } while (allCones !== 0);

    if(allCones === 0) {
        console.log("Yay! I sold them all!");
    }
})();