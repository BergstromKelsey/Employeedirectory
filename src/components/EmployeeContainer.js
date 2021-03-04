
   import React, { Component } from "react";
   import Container from "./Container";
   import Row from "./Row";
   import Col from "./Col";
   import Card from "./Card";
   import SearchForm from "./SearchForm";
   import API from "../utils/API";
   
   
   class EmployeeContainer extends Component {
     state = {
       employees: [],
       search: ""
     };
   
    
     componentDidMount() {
       API.searchEmployees()
       .then (res =>{
         const employeeArray = res.data.results.map (employee => {
           return{
             firstname:employee.name.first,
             lastname: employee.name.last,
             email: employee.email,
             dob: employee.dob.date,
             location: employee.location.city,
             image: employee.image
           }
         });
         this.setState({ employees: employeeArray})
   
       })
       .catch(err => console.log(err));
     }
   
 



     //function to update search state each time the user types a character
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  //function to filter list to only show first/last that matches search
  filteredEmployees() {
    const search = this.state.search.toLowerCase();
    return this.state.employees.filter(employee => {
      return (
        employee.firstname.toLowerCase().includes(search) ||
        employee.lastname.toLowerCase().includes(search)
      );
    });
  }

  //function to render a table of users
  renderEmployees = () => {
    return this.filteredEmployees()
      .sort(this.sortEmployees)
      .map((employee, index) => {
        return (
          <tr key={index}>
            <td>
              <img src={employee.image} alt="user"></img>
            </td>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob).toDateString()}</td>
          </tr>
        );
      });
  };

  //depending on which column was clicked, add or remove the arrow
  //icon specifying the sort direction
  getHeaderClassName = col => {
    return this.state.col === col
      ? `clickable ${this.state.sortDirection}`
      : `clickable`;
  };

  //depending on which column was clicked, set the sort direction to
  //the opposite of what it was.
  handleSortDirectionChange = col => {
    this.state.col === col && this.state.sortDirection === "ascending"
      ? this.setState({ sortDirection: "descending", col: col })
      : this.setState({ sortDirection: "ascending", col: col });
  };

  //function to return 1 or -1 to sort function depending on sort direction
  sortEmployees = (a, b) => {
    if (a[this.state.col] < b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? -1 : 1;
    } else if (a[this.state.col] > b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? 1 : -1;
    }
    return 0;
  };




   
     render() {
       return (
        
             <center> 
           <Container>
           
                    <Row>
                    
              <Col size="md-12">
                  <Card></Card>
              </Col>
             
              </Row>
           
              <Col size="md-6">
                 <SearchForm 
                 />
               </Col>
         


               <div className="table m-3">
             <table className="table">
               <thead>
                 <tr>
                 <th scope="col">Photo</th>
                   <th scope="col">
                   
                 
                     <span
                       className={this.getHeaderClassName("First")}
                      //  onClick={() => {
                      //    this.handleSortDirectionChange("First Name");
                      //  }}
                     >
                       First Name
                     </span>
                   </th>
                   <th scope="col">
                     <span
                       className={this.getHeaderClassName("Last")}
                       
                     >
                       Last Name 
                     </span>
                   </th>
                   <th scope="col">
                     <span
                       className={this.getHeaderClassName("email")}
                      
                     >
                       Email
                     </span>
                   </th>
                   <th scope="col">
                     <span
                       className={this.getHeaderClassName("dob")}
                       
                     >
                       Date of Birth
                     </span>
                   </th>
                  </tr> 
               </thead>
               <tbody>{this.renderEmployees()}</tbody>
          
             </table>
             </div>
           </Container> 
           
           </center>
           
           
          )}    
                     }
                     
                 
   
   
   
              
       
                     export default EmployeeContainer;