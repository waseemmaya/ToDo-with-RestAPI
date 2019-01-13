import React, { Component } from "react";
import { ListItem } from "grommet";
import DeleteIcon from "../SmallComponents/DeleteIcon";
import { connect } from "react-redux";
import { removeTask } from "../Redux/actions/actions";
import axios from "axios";

const url = "http://localhost:5000";

class ToDos extends Component {
  render() {
    const { val, index } = this.props;
    return (
      <ListItem justify="between" separator="horizontal">
        <span>
          {index + 1} - {val.taskName}
        </span>
        <span onClick={() => this.removeTask(val._id)}>
          <DeleteIcon />
        </span>
      </ListItem>
    );
  }

  removeTask = id => {
    axios
      .delete(`${url}/tasks/${id}`)
      .then(response => {
        this.props.removeTask(id);
      })
      .catch(error => {
        console.log(error);
      });
  };
}

const mapStateToProps = state => {
  return {
    tasks: state.reducers.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTask: task => dispatch(removeTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos);
