import React, { Component } from "react";
import { App, List } from "grommet/components/..";
import axios from "axios";
import Head from "./Components/Head";
import ToDos from "./Components/ToDos";
import { connect } from "react-redux";
import { pushTasks } from "./Redux/actions/actions";
import AddTask from "./Components/AddTask";

const url = "http://localhost:5000";

class Main extends Component {
  render() {
    // console.log("this.props :", this.props);
    return (
      <App>
        <br />
        <Head />
        <AddTask />
        <br />
        {this.renderTodos()}
      </App>
    );
  }

  fetchTodos = () => {
    axios
      .get(`${url}/tasks`)
      .then(response => {
        this.props.pushTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (this.props.tasks.length === 0) {
      this.fetchTodos();
    }
  }

  renderTodos = () => {
    const { tasks } = this.props;
    return (
      <div>
        <List>
          {tasks.map((v, i) => {
            return <ToDos key={v._id} index={i} val={v} />;
          })}
        </List>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    tasks: state.reducers.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pushTasks: tasks => dispatch(pushTasks(tasks))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
