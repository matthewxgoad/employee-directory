import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function EmployeeInfo({ search, employeeData, setEmployeeData }) {

  useEffect( () => {
    API.getEmployees()
      .then((res) => res.json())
      .then((res) => {
        setEmployeeData(res.results);
      });
  }, );
  return(
      <h1>Employee Info</h1>
      // <>
      //   {employeeData.filter(employee => employee.name.first.toUpperCase().includes(search.toUpperCase()) || employee.name.last.toUpperCase().includes(search.toUpperCase())).map(employee => (
      //     <tr className="align-middle" key={employee.email}>
      //       <th scope="row">
      //         <img src={employee.picture.medium} alt="" />
      //       </th>
      //       <td>{employee.name.first} {employee.name.last}</td>
      //       <td>{employee.phone}</td>
      //       <td>{employee.email}</td>
      //     </tr>
      //   )
      //   )}
      // </>
  )
}

export default EmployeeInfo;