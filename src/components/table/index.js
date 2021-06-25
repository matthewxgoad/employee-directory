import EmployeeInfo from "../employeeInfo";
import "./style.css";

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col" onClick={props.sortEmployeeName}>
            Name
          </th>
          <th scope="col">Phone</th>
          <th scope="col" onClick={props.sortEmployeeEmail}>
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employeeList.length > 0 ? (
          props.employeeList.map((employee) => {
            return <EmployeeInfo employee={employee} />;
          })
        ) : (
          <tr>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
