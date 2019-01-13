var mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: String,
  date: String,
  isDone: Boolean
});

const Tasks = mongoose.model("Tasks", TaskSchema);

module.exports = Tasks;
