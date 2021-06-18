import React, { Component } from "react";
import Search from "../components/search";
import Table from "../components/table";
import Container from "../components/container";

class Employee extends Component {
  render() {
    return (
      <Container>
        <Search />
        <Table />
      </Container>
    );
  }
}

export default Employee;
