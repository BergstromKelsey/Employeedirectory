import React from "react";


const styles = {

  input: {
    marginTop:"30px",
   alignItems:"center",
    fontSize: "1.6rem",
    color: "white",
   
  

  },
  button: {
    marginTop:"-60px",
    alignItems:"center",
    fontSize:"1rem",
    color: "white",
    width:"200px",
  
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