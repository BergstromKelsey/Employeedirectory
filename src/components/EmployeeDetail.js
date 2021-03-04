import React from "react";


const styles = {

  empdetails: {
    background: "#5F9EA0",
    fontSize: "0px",
    color: "white",
    padding: "0px"
    
  }}



function MovieDetail(props) {
  return (
    <div style={styles.empdetails} className="text-center">

      <h2>Name {props.name}
      Email {props.location}
      Location {props.email}</h2>
    </div>
  );
}

export default MovieDetail;
