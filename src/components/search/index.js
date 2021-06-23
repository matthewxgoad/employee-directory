import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";

function Search(props) {
    const employeeData = API.getEmployees();
    return (
        <h1>Search</h1>
        // <form className="search">
        //     <div className="form-group">
        //         <input 
        //             value={props.search}
        //             onChange={props.handleInputChange}
        //             name="employee"
        //             list="employees"
        //             type="text"
        //             className="form-control"
        //             placeholder="Search for an employee"
        //             id="employeeSearch"
        //         />
        //         <datalist id="employees">
        //             {props.employeeData.map(employee => (
        //                 <option value={employee} key={employee} />
        //             ))}
        //         </datalist>
        //         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
        //     </div>
        // </form>
    )
}

export default Search