const express = require("express");
const router = express.Router();
const Tasks = require("../model/tasks");

// Get All Tasks
router.get("/tasks", (req, res) => {
  Tasks.find({})
    .then(result => res.send(result))
    .catch(err => console.log("Err---->", err));
});

// Get Specific User found by ID
router.get("/tasks/:id", (req, res) => {
  Tasks.findById(req.params.id, function(err, user) {
    console.log("user-------------->", user);
    res.send(user);
  });
});

// Add Task
router.post("/addTask", (req, res) => {
  console.log("<========Post Request====>", req.body);

  const task = new Tasks(req.body);
  task.save(req.body, function(err, result) {
    if (err) return;

    console.log("result", result.id);
    res.send(result);
  });

  // task.save();
});

// Delete User
router.delete("/tasks/:id", (req, res) => {
  Tasks.findByIdAndRemove(req.params.id, function(err, user) {
    res.send("User Deleted Successfully");
  });
});

// Update User
router.put("/updateTask/:id", (req, res) => {
  console.log("<========Put Body Age====>", req.body.age);
  console.log("<========Put ID====>", req.params.id);
  Tasks.findById(req.params.id, function(err, user) {
    user.age = req.body.age;
    user.save(function(err, updatedUser) {
      res.send(updatedUser);
    });
  });
  const user = new Tasks(req.body);
  user.update({});
});

module.exports = router;
