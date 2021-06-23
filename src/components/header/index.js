import React from "react";
import "./style.css";
import Search from "../search"
import EmployeeList from "../employeeList";

function Header(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">Employee Directory</span>
                <Search 
                    search = {props.search}
                    setSearch = {props.setSearch}
                />
            </div>
        </nav>
    )
}

export default Header