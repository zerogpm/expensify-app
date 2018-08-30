const person = {
  name: 'chris',
  age: 26,
  location: {
    city: 'shenzhen',
    temp: 92
  }
};

const {name = 'people', age} = person;

console.log(`${name} is ${age}`);

const {temp:temper, city} = person.location;

console.log(`its ${temper} in ${city}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;


const address = ['1299 S shenzhen', 'shenzhen', 'guangdong', '11122'];

const [street, city, , zip] = address;

console.log(`You are in ${street} ${city} ${zip}`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , price, ] = item;
console.log(`A medium ${coffee} costs ${price}`);