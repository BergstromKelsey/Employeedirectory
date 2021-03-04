import React from "react";


const styles = {

  header: {
    background: "#5F9EA0",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.6rem",
    color: "white",
    padding: "0 20px"
    
  }}


function Card(props) {
  return (
    <div style= {styles.header} className="card text-center">
      <div className="card-header">
        <h2>EMPLOYEE TRACKER</h2>
      </div>
     </div>
  );
}

export default Card;