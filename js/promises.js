"use strict";

const wait = time => {
    return new Promise(resolve => {
       setTimeout(resolve, time);
    });
}

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// const user_commit = username => {
//     return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubToken}}).then(data => {
//         return fetch(data[data.length - 1].url, {headers: {'Authorization': githubToken}}).then(response => response.json());
//     });
// }
const user_commit = username => {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubToken}}).then(response => response.json()).then(response => {
        console.log(response);
        let commits = response[0].payload.commits;
        return fetch(commits[commits.length - 1].url, {headers: {'Authorization': githubToken}}).then(response => response.json());
    });
}

user_commit('carloszteller').then(data => {
    console.log(new Date(data.commit.author.date));
}).catch(error => {
    console.log(error);
});

