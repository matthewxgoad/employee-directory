import React, { useState } from "react";
import EmployeeInfo from "../employeeInfo";
import "./style.css";

export default function Table() {

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

  const employeeList = [
    {
      email: 'matthewgoad@gmail.net',
      first: 'Matthew',
      last: 'Goad',
      phone: '9019019011',
      picture: 'https://randomuser.me/api/portraits/med/women/54.jpg'
    },
    {
      email: 'matthewgoad@gmail.com',
      first: 'Matthew',
      last: 'Goad',
      phone: '9019019011',
      picture: 'https://randomuser.me/api/portraits/med/women/54.jpg'
    },
    {
      email: 'matthewgoad@yahoo.net',
      first: 'Matthew',
      last: 'Goad',
      phone: '9019019011',
      picture: 'https://randomuser.me/api/portraits/med/women/54.jpg'
    }
  ];

  const [employees] = useState(employeeList);
  const employeeViews = employees.map(
    employee => <EmployeeInfo key={employee.email} employee={employee} />
  )

  return (
    <table className="table">
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
        {employeeViews}
      </tbody>
    </table>
  );
}