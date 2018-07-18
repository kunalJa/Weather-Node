const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('You must input numbers.');
      }
    }, 1500);
  });
};

asyncAdd(21,9).then((res) => {
  console.log(res);
  return asyncAdd(res, 10);
}).then((res) => {
  console.log(res);
}).catch((e) => {
  console.log(e);
})

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey it worked'); // Only one action can happen
//     reject('Didn\'t work');
//   }, 2500);
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (error) => {
//   console.log('Error: ', error);
// })
