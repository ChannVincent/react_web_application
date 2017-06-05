// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback("Philadelphia", function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   }
//   else {
//     console.log('success');
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },
//     1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promis success', temp);
// },
// function (err) {
//   console.log('error', err);
// })

// Challenge area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== 'number' || typeof b !== 'number' ) {
      reject('a and b must be of type number');
    }
    resolve(a + b);
  });
}

addPromise (1, 2).then(function (result) {
  console.log(result);
},
function (err) {
  console.log(err);
});

addPromise ('a', 20).then(function (result) {
  console.log(result);
},
function (err) {
  console.log(err);
});
