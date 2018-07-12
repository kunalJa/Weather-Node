const getUser = (id, callback) => {
  var user = {
      id,
      name: 'Kunal'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userOBJ) => {
  console.log(userOBJ);
});
