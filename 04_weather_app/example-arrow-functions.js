var names =[
  'Andrew',
  'Julie',
  'Jen'
];

// names.forEach(function (name) {
//   console.log('for each', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach((name) => console.log(this.name + ' says hi to ' + name));
//   }
// }
//
// person.greet();

// Challenge
function add(a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => { return a + b };

// addEspression
var addExpression = (a, b) => a + b;

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));
