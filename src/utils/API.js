import React, { useState, useEffect } from "react";

export default function App() {
  
const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https//randomuser.me/api/?inc=name,email,phone,picture&results=20")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";

  return
  
  ({
        first: data.results[0].name.first,
        last: data.results[0].name.last,
        email: data.results[0].email,
        picture: data.results[0].picture.medium,
        phone: data.results[0].phone
 })