"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

// Asks the user for their favorite color and outputs the response
var favoriteColor = prompt("What is your favorite color?");

alert("Wow, " + favoriteColor + " is my favorite color, too!");

/*
 * Asks the user the number of days they would like to rent each movie, then
 * outputs the total price for the total number of days rented
 * */
var littleMermaidNumDays = prompt("How many days would you like to rent The Little Mermaid For?");
var brotherBearNumDays =  prompt("How many days would you like to rent Brother Bear for?");
var herculesNumDays = prompt("How many days would you like to rent Brother Bear for");
var pricePerDay = 3, totalDays = Number(littleMermaidNumDays) + Number(brotherBearNumDays) + Number(herculesNumDays), totalPrice = pricePerDay * totalDays;

alert("It costs $" + pricePerDay.toFixed(2) + " per day, so the total price for a total of " + totalDays + " days comes out to $" + totalPrice.toFixed(2) + ".");

/*
 * Asks the user their hourly wage and hours worked weekly for each company, then
 * outputs the total weekly salary
 * */
var hourlyGoogle = prompt("What is your hourly wage at Google?");
var hoursWorkedGoogle = prompt("How many hours this week did you work at Google?");
var hourlyAmazon = prompt("What is your hourly wage at Amazon?");
var hoursWorkedAmazon = prompt("How many hours this week did you work at Amazon?");
var hourlyFacebook = prompt("What is your hourly wage at Facebook?");
var hoursWorkedFacebook = prompt("How many hours this week did you work at Facebook?");
var weeklySalary = (hourlyGoogle * hoursWorkedGoogle) + (hourlyAmazon * hoursWorkedAmazon) + (hourlyFacebook * hoursWorkedFacebook);

alert("Your total salary for this week is: $" + weeklySalary.toFixed(2) + ".");

/*
 * First prompts the user if they are a premium member, if yes ask if offer has expired
 * if not, prompts the user if they are purchasing more than 2 items
 * if not a premium member, and they are purchasing more than 2 items, ask if offer has expired
 * then output if offer can be applied
 * */
var isPremiumMember = prompt("Are you a premium member? [Y/N]");
if(isPremiumMember.toUpperCase() === 'Y') {
    isPremiumMember = true;
} else {
    isPremiumMember = false;
}

if(!isPremiumMember) {
    var numberOfItemsPurchasing = Number(prompt("How many items are you purchasing?"));
    if(numberOfItemsPurchasing <= 2) {
        alert("I'm sorry, you must be purchasing more than 2 items for the offer to apply.");
    }
}

if(isPremiumMember || numberOfItemsPurchasing > 2) {
    var hasOfferExpired = prompt("Has the offer expired? [Yg/N]");
    if(hasOfferExpired.toUpperCase() === 'Y') {
        hasOfferExpired = true;
    } else {
        hasOfferExpired = false;
    }

    if(hasOfferExpired) {
        alert("I'm sorry, this is no longer a valid offer and cannot be applied to your purchase.")
    } else {
        alert("Congratulations! Your offer is valid and can be applied to your purchase!")
    }
}