const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey it worked');
    reject('Didn\'t work');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (error) => {
  console.log('Error: ', error);
})
