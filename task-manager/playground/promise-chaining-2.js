require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("61fd0c3a653610cf0538fcf3")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
