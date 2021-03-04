import React from "react";


const styles = {

  empdetails: {
    background: "#5F9EA0",
    fontSize: "1rem",
    color: "white",
    padding: "0px",
    
    
  }}



function EmployeeDetail(props) {
  return (
    <div style={styles.empdetails} className="text-center">

      Name {props.name}
      Email {props.location}
      Location {props.email}
    </div>
  );
}

export default EmployeeDetail;
