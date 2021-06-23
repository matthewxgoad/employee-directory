import React, { Component } from "react";
import Table from "../components/table";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";

class Employee extends Component {
  render() {
    return (
        <div>
            <Header />
                <Container>
                    <Table />
                </Container>
            <Footer />
        </div>
    );
  }
}

export default Employee;
