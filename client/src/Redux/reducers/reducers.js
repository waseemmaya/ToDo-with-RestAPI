const initial_state = {
  tasks: []
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "PUSH_TASKS": {
      console.log("PushTasks Chala.....");
      const { tasks } = state;
      let newArr = tasks.concat(action.tasks);
      return { ...state, tasks: newArr };
    }
    case "ADD_TASK": {
      const { tasks } = state;
      let newArr = [];
      newArr[0] = action.task;
      let arr = tasks.concat(newArr);

      return { ...state, tasks: arr };
    }
    case "UPDATE_TASK": {
      return { ...state, tasks: action.task };
    }

    case "REMOVE_TASK": {
      var { tasks } = state;
      var task = tasks.find(v => action.id === v._id);
      return { ...state, tasks: tasks.filter(v => v !== task) };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
