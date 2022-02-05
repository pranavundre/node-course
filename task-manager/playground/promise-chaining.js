require("../src/db/mongoose");

const User = require("../src/models/user");

// 61fd079c23ad1ad7e5d8597a

User.findByIdAndUpdate("61fd079c23ad1ad7e5d8597a", { age: 18 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 18 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
