// const person = {
//   name: 'chris',
//   age: 26,
//   location: {
//     city: 'shenzhen',
//     temp: 92
//   }
// };
//
// const {name = 'people', age} = person;
//
// console.log(`${name} is ${age}`);
//
// const {temp:temper, city} = person.location;
//
// console.log(`its ${temper} in ${city}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);