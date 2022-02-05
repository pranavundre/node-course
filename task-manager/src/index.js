const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  // console.log(req.body);
  // res.send("Testing");

  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(202).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(202).send(task);
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/tasks/:id", (req, res) => {
  const task_id = req.params.id;

  Task.findById(task_id)
    .then((task) => {
      if (!task) {
        res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.listen(port, () => {
  console.log("App is running on port " + port);
});
