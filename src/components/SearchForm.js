import React from "react";


const styles = {

  input: {
    background: "#5F9EA0",
   alignItems:"center",
    fontSize: "1.6rem",
    color: "white",
    padding: "0 20px"

  },
  button: {
    alignItems:"center",
    fontSize: "1.6rem",
    color: "white",
    padding: "0 20px",
    background:"#000000",
  }

    
  }



function SearchForm(props) {
  return (
    
    <form>


       
      <div style= {styles.input} className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <br />
      
        <button onClick={props.handleFormSubmit} style={styles.button} className="btn btn-primary">
          Search
        </button>
        
    </div>
    
    </form>
   
  
  );
}

export default SearchForm;