import React, { useState } from "react";
import EmployeeInfo from "../employeeInfo";
import "./style.css";

function Table(props) {
  const [employeeData, setEmployeeData] = useState([]);
  const [isAscending, setIsAscending] = useState(false);

  function sortEmployeeName() {
    setIsAscending(!isAscending)
    if (isAscending) {
      const newArray = [...employeeData];
      newArray.sort( (a,b) => (`${a.name.first} ${a.name.last}`).localeCompare(`${b.name.first} ${b.name.last}`))
      setEmployeeData(newArray)
    }else{
      const newArray = [...employeeData];
      newArray.sort( (a,b) => (`${b.name.first} ${b.name.last}`).localeCompare(`${a.name.first} ${a.name.last}`))
      setEmployeeData(newArray)
    }
  }

  function sortEmployeeEmail() {
    setIsAscending(!isAscending)
    if (isAscending) {
      const newArray = [...employeeData];
      newArray.sort( (a,b) => a.email.localeCompare(b.email))
      setEmployeeData(newArray)
    }else{
      const newArray = [...employeeData];
      newArray.sort( (a,b) => b.email.localeCompare(a.email))
      setEmployeeData(newArray)
    }
  }

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col" onClick={sortEmployeeName}>
            Name
          </th>
          <th scope="col" onClick={sortEmployeeEmail}>Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeInfo
          empData={employeeData}
          setEmpData={setEmployeeData}
          search={props.search}
        />
      </tbody>
    </table>
  );
}

export default Table;
