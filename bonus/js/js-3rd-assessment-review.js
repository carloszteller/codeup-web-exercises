// #Loops, Arrays, & Objects
//
// ##Basic Review
//
// 1. What is an array in Javascript?
// JavaScript array is an object that represents the collection of similar types of items.  JavaScript arrays are used
// to save multiple values in a single variable.
//
//     2. What is an object in Javascript?
//      A javaScript object is an entity having state and behavior (properties and method).
//
//     3. What is the difference between an array and an object?
//      Arrays are objects only in javascript. The major difference is that they store the data in an ordered
//      collection in which the data can be accessed using a numerical index. Objects are mutable data structure in
//      javascript which is used to represent a ‘Thing’. This could be anything like cars, plants, person, community etc.
//
//     4. What is a property? A method?
//      A property is a member that provides a flexible mechanism to read, write, or compute the value of a private
//      field. A method is a code block containing a series of statements.
//
//     5. Why are loops useful when dealing with arrays?
//      Loops offer a quick and easy way to do repeatedly iterate through an array.
//
//     6. What is an index?
//      It contains the position of a regular expression match within the array.
//
//     7. What is the difference between dot and bracket notation?
//      Dot notation is faster to write and clearer to read. Bracket notation allows access to properties containing
//      special characters and selection of properties using variables
//
//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
    function filterNumbers(array) {
        var numbers = [];

        array.forEach(function(num, i) {
           if(!isNaN(parseFloat(num))) {
               numbers.push(num);
           }
        });

        return numbers.sort(function(a, b) {
            return a - b;
        });
    }
    // console.log(filterNumbers(["fred", true, 5, 3]));
    // console.log(filterNumbers([100, 5, 20, 3]));

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

//     //Example Input:
//
       var pets = [
            {
                 name: "Chompers",
                 breed: "Pug",
                 age: 7
             },
             {
                 name: "Freddy",
                 breed: "Lab",
                 age: 4
             },
             {
                 name: "Mr. Pig",
                 breed: "Mastif",
                 age: 10
             }
            ];

        function getOlder(array) {
            var petOlderArray = [];
            array.forEach(function(pet) {
                petOlderArray.push({name: pet.name, breed: pet.breed, age: ++pet.age});
            });

            return petOlderArray;
        }

    // console.log(getOlder(pets));

//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];


// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

//             // Example input
//             [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
//             ]

//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]


function washCars(cars) {
    cars.forEach(function(car) {
        if(car.isDirty) {
            car.isDirty = false;
        }
    });

    return cars;
}

var cars = [
        {
             make: 'Volvo',
             color: 'red',
             year: 1996,
             isDirty: true
         },
         {
             make: 'Toyota',
             color: 'black',
             year: 2004,
             isDirty: false
         },
         {
             make: 'Ford',
             color: 'white',
             year: 2007,
             isDirty: true
         }
    ];

// console.log(washCars(cars));

// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on
// the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of
// user objects that are admins.

//          //Example Input:
//           [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              },
//              {
//                  isAdmin: false,
//                  email: 'user3@email.com'
//              }
//          ];


//        // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
// function adminList(users) {
//     var adminCount = 0;
//
//     users.forEach(function(admin) {
//         if(admin.isAdmin) {
//             adminCount++;
//         }
//     });
//
//     return adminCount;
// }

// function adminList(users) {
//     var adminEmails = [];
//     users.forEach(function(admin) {
//         if(admin.isAdmin) {
//             adminEmails.push(admin.email);
//         }
//     });
//
//     return adminEmails;
// }

function adminList(users) {
    var admins = [];
    users.forEach(function(admin) {
        if(admin.isAdmin) {
            admins.push(admin);
        }
    });

    return admins;
}

var users = [
    {
     isAdmin: true,
     email: 'user1@email.com'
    },
    {
     isAdmin: true,
     email: 'user2@email.com'
    },
    {
     isAdmin: false,
     email: 'user3@email.com'
    }
];
// console.log(adminList(users));

// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an
// array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of
// the two passed in arrays. Assume the two array inputs are the same length.

//     Example Input:
//
//          var breads  = [
//              "white",
//              "wheat",
//              "rhy",
//              "white"
//          ];
//
//          var fillings = [
//              "pb&j",
//              "ham",
//              "cheese steak",
//              "tuna"
//          ];
//
//          makeSandwichObjects(breads, fillings) // example call to the function

//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
function makeSandwichObjects(breads, fillings) {
    var sandwiches = [];

    breads.forEach(function(bread, i) {
        sandwiches.push({
            bread: bread,
            filling: fillings[i]
        });
    });

    return sandwiches;
}

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

// console.log(makeSandwichObjects(breads, fillings));

// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings
//  that are equal to "yellow"
function keepYellow(array) {
    var yellows = [];

    array.forEach(function(arr) {
       if(arr === 'yellow') {
           yellows.push(arr);
       }
    });

    return yellows;
}

console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));
