require("../src/db/mongoose");

const User = require("../src/models/user");
const Task = require("../src/models/task");

// User.findByIdAndUpdate("61fd079c23ad1ad7e5d8597a", { age: 18 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 18 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });
//   return count;
// };

// updateAgeAndCount("61fd079c23ad1ad7e5d8597a", 20)
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Challenge: async/await

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.where({ completed: true }).countDocuments();
  return count;
};

deleteTaskAndCount("61fea172a005a5abb2d78899")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
