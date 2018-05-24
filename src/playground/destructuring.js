// const person = {
//   name: "Ivan",
//   age: 24,
//   location: {
//     city: "Santa Cruz",
//     temp: 60
//   }
// };

// const { name = 'John Doe', age } = person;

// console.log(`${name} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const address = ["600 Park ave.", "Santa Cruz", "California", "95010"];

const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}.`);

const menu = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [item, , medium] = menu;

console.log(`A medium ${item} costs ${medium}.`)