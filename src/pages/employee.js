import React, { Component } from "react";
import Table from "../components/table";
import Container from "../components/container";
import Header from "../components/header";

class Employee extends Component {
  render() {
    return (
        <div>
            <Header />
                <Container>
                    <Table />
                </Container>
        </div>
    );
  }
}

export default Employee;
