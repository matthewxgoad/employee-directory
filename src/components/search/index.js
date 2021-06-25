import React from 'react';
import './style.css';

function Search ( props ) {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     type="search"
     name="search"
     value={props.search}
     placeholder={"search employees"}
     onChange={props.handleInputChange}
    />
  );
}

export default Search