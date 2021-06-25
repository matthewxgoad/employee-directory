import React from 'react';
import "./style.css";

const EmployeeInfo = (props) => {
   console.log("EmployeeInfo:",props.employee)

  return (
    <tr className="align-middle" key={props.employee.email}>
      <th scope="row">
        <img src={props.employee.picture.medium} alt="" />
      </th>
      <td>
        {props.employee.name.first} {props.employee.name.last}
      </td>
      <td>{props.employee.phone}</td>
      <td>{props.employee.email}</td>
    </tr>
  );
};

export default EmployeeInfo;
