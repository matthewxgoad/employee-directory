import React, { useEffect } from "react";
// import API from "../../utils/API";
import "./style.css";

const EmployeeInfo = ({ employee }) => {
  const { first, last, phone, email, picture } = employee;

  return (
    <tr className="align-middle" key={email}>
      <th scope="row">
        <img src={picture.medium} alt="" />
      </th>
      <td>
        {first} {last}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};

export default EmployeeInfo;
