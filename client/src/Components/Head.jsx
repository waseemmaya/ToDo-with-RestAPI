import React, { Component } from "react";
import { Header, Heading, Box } from "grommet";

class Head extends Component {
  render() {
    return (
      <Header>
        <Box flex={true} justify="center" direction="row" responsive={false}>
          <Heading>To Do App with Rest API</Heading>
        </Box>
      </Header>
    );
  }
}

export default Head;
