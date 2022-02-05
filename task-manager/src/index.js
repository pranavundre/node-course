const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(202).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

  // user
  //   .save()
  //   .then(() => {
  //     res.status(202).send(user);
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }

  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
});

app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }

  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(202).send(task);
  } catch (e) {
    res.status(400).send(e);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.status(202).send(task);
  //   })
  //   .catch((err) => {
  //     res.status(400);
  //     res.send(err);
  //   });
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }

  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
});

app.get("/tasks/:id", async (req, res) => {
  const task_id = req.params.id;

  try {
    const task = await Task.findById(task_id);
    if (!task) {
      res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }

  // Task.findById(task_id)
  //   .then((task) => {
  //     if (!task) {
  //       res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});
