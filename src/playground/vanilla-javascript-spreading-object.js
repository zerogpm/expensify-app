const objToSpread = { name: "chris", job: "Programmer" };
const someOtherObject = { likes: "Pizza" };

const newObj = Object.assign({}, someOtherObject, objToSpread);

console.log(newObj); // outputs { likes: "Pizza", name: "chris, job: "Programmer" }