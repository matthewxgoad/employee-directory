import { response } from "express";
import React, { useEffect } from "react";
import "./style.css";

function EmployeeInfo({ search, empData, setEmpData }) {
  const randomEmpUrl =
    "https://randomuser.me/api/?inc=name,email,phone,picture&results=15";
  useEffect(() => {
    fetch(randomEmpUrl)
      .then((res) => res.json())
      .then((res) => {
        setEmpData(response.results);
      });
  }, []);
  return(
      <>
        
      </>
  )
}

export default EmployeeInfo