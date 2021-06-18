import React, { useState } from "react";
import EmployeeInfo from "../employeeInfo";
import "./style.css";

function Table() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col" onClick={sortName}>
            Name
          </th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeInfo
          empData={empData}
          setEmpData={setEmpData}
          search={props.search}
        />
      </tbody>
    </table>
  );
}

export default Table;
