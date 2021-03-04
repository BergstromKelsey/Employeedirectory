
   import React, { Component } from "react";
   import Container from "./Container";
   import Row from "./Row";
   import Col from "./Col";
   import Card from "./Card";
   import SearchForm from "./SearchForm";
   import API from "../utils/API";
   
   
   class EmployeeContainer extends Component {
     state = {
       results: {},
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
             image: employee.picture.medium
           }
         });
         this.setState({ results: employeeArray})
   
       })
       .catch(err => console.log(err));
     }
   
   
   
   
   
     handleInputChange = event => {
       this.setState({ search: event.target.value });
       }
     
      
       getHeaderClassName = col => {
        return this.state.col === col
          ? `clickable ${this.state.sortDirection}`
          : `clickable`;
      };       
             
         
             
   
   
     // const value = event.target.value;
     // const name = event.target.name;
     // this.setState({
     //   [name]: value
     handleFormSubmit = event => {
     event.preventDefault();
     const value = event.target.value;
     const name = event.target.name;
     this.setState({
   
       [name]: value
   
     });
     }
   
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
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
            <div className="table m-3">
          <table className="table">
            <thead>
              <tr>
              
                <th scope="col">
                
                  <span
                    className={this.getHeaderClassName("first")}
                    // onClick={() => {
                    //   this.handleSortDirectionChange("first");
                    // }}
                  >
                    First Name
                  </span>
                </th>
                <th scope="col">
                  <span
                    className={this.getHeaderClassName("last")}
                    
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
                <th scope="col">Photo</th>
              </tr>
            </thead>
            
          </table>
          </div>
        </Container> 
        
        </center>
        
        
       )}    
                  }
                  
              



           
    
   
   export default EmployeeContainer;