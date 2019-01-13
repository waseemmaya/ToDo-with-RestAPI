import React, { Component } from "react";
import { FormField, TextInput } from "grommet/components/..";
import moment from "moment";
import { addTask } from "../Redux/actions/actions";
import { connect } from "react-redux";
import axios from "axios";
import swal from "sweetalert2";
const url = "http://localhost:5000";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }
  render() {
    // console.log("this.props :", this.props);
    return (
      <FormField>
        <TextInput
          onKeyPress={this.handleKeyPress}
          id="task"
          name="task_field"
          placeHolder="Add Task.."
          value={this.state.taskName}
          onDOMChange={e => {
            this.setState({ taskName: e.target.value });
          }}
        />
      </FormField>
    );
  }

  handleKeyPress = target => {
    if (target.charCode === 13) {
      // alert("Enter clicked!!!");
      this.sendData();
    }
  };

  sendData = () => {
    var { taskName } = this.state;
    if (!taskName) {
      swal("Any fool can not add empty task...");
      return;
    }
    let task = {
      taskName: taskName,
      date: moment().format(),
      isDone: false
    };

    axios
      .post(`${url}/addTask`, task)
      .then(response => {
        // console.log("<=======responseData====>", response);
        this.props.addTask(response.data);
        this.setState({
          taskName: ""
        });
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
    addTask: task => dispatch(addTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
