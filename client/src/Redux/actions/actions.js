const pushTasks = tasks => {
  return {
    type: "PUSH_TASKS",
    tasks
  };
};

const addTask = task => {
  return {
    type: "ADD_TASK",
    task
  };
};

const updateTask = (i, task) => {
  return {
    type: "UPDATE_TASK",
    index: i,
    task: task
  };
};

const removeTask = id => {
  return {
    type: "REMOVE_TASK",
    id
  };
};

export { removeTask, addTask, updateTask, pushTasks };
