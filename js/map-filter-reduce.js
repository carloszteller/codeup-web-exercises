"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let user_objs = users.filter(user => user.languages.length >= 3);
// console.log(user_objs);

// TODO: Use .map to create an array of strings where each element is a user's email address
let emails = users.map(user => user.email);
// console.log(emails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let total_years = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// console.log(total_years / users.length);

// TODO Use .reduce to get the longest email from the list of users.
let longest_email = users.reduce((longest, user) => {
    if(user.email.length > longest.length) {
        longest = user.email;
    }

    return longest;
}, '');
// console.log(longest_email);

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let users_str = users.reduce((str, user, i) => {
    if(i !== users.length - 1) {
        str += user.name + ', ';
    } else {
        str += user.name + '.';
    }

    return str;
}, 'Your instructors are: ');
// console.log(users_str);

// TODO: Bonus: Use .reduce to get the unique list of languages from the list of users.
let unique_languages = users.reduce((unique, user) => {
    for(let language of user.languages) {
        if(!unique.includes(language)) {
            unique.push(language);
        }
    }

    return unique;
}, []);
console.log(unique_languages);