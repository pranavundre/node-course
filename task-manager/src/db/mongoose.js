const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  // useNewUrlParser: true,
  // useCreateIndex: true,
});

// const ishan = new User({
//   name: "Ishan",
//   age: 17,
//   password: "pranav",
// });

// ishan
//   .save()
//   .then(() => {
//     console.log(ishan);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   completed: {
//     required: false,
//     type: Boolean,
//     default: false,
//   },
// });

// const task = Task({
//   description: "task description",
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
