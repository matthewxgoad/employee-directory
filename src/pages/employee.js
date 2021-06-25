import React, { Component } from "react";
import Table from "../components/table";
import Container from "../components/container";
import Header from "../components/header";
import API from "../utils/API";

class Employee extends Component {
  state = {
    employeeList: [],
    originalList: [],
    ascending: true,
    search: ""
  };

  componentDidMount() {
    console.log("loading");
    API.getEmployees().then((response) => {
      console.log("results", response.data.results);
      this.setState({
        employeeList: response.data.results,
        originalList: response.data.results
      });
    });
  }
  handleInputChange = (event) => {
    const { name, value } = event.target

    this.setState({[name]: value})

    const newArray = this.state.originalList.filter(employee => {
      return employee.name.first.toLowerCase().includes(value.toLowerCase()) || employee.name.last.toLowerCase().includes(value.toLowerCase()) || employee.email.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({ employeeList: newArray })
  }
  sortEmployeeName = () => {
    // setAscending(!ascending);
    if (this.state.ascending) {
      const newArray =  this.state.employeeList.sort((a, b) =>
        `${a.name.first} ${a.name.last}`.localeCompare(
          `${b.name.first} ${b.name.last}`
        )
      );
      this.setState({ascending: false, employeeList: newArray})
      // setEmployeeData(newArray);
    } else {
      const newArray =   this.state.employeeList.sort((a, b) =>
        `${b.name.first} ${b.name.last}`.localeCompare(
          `${a.name.first} ${a.name.last}`
        )
      );
      this.setState({ascending: true, employeeList: newArray})
      // setEmployeeData(newArray);
    }
  };

  sortEmployeeEmail = () => {
    // setAscending(!ascending);
    if (this.state.ascending) {
      const newArray =  this.state.employeeList.sort((a, b) => a.email.localeCompare(b.email));
      // setEmployeeData(newArray);
      this.setState({ascending: false, employeeList: newArray})
    } else {
      const newArray =   this.state.employeeList.sort((a, b) => b.email.localeCompare(a.email));
      // setEmployeeData(newArray);
      this.setState({ascending: true, employeeList: newArray})
    }
  };

  // const employeeViews = employees.map((employee) => (
  //   <EmployeeInfo key={employee.email} employee={employee} />
  // ));
  render() {
    return (
      <div>
       {console.log(this.state.employeeList)}
        <Header handleInputChange={this.handleInputChange} search={this.state.search}/>
        <Container>
         
          <Table employeeList={this.state.employeeList} sortEmployeeEmail={this.sortEmployeeEmail} sortEmployeeName={this.sortEmployeeName} />
        </Container>
      </div>
    );
  }
}

export default Employee;
