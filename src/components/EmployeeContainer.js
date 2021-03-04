import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
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
       
      
        <Container>
              <Row>
              
        <Col size="md-12">
            <Card></Card>
        </Col>
       
        </Row>
     <center>
        <Col size="md-6">
           <SearchForm 
             value={this.state.search}
             handleInputChange={this.handleInputChange}
             handleFormSubmit={this.handleFormSubmit}
           />
         </Col>
        
         <Row>
          <Col size="md-12">
            
              <EmployeeDetail
                name={this.state.results.name}
                // location={this.state.result.results.location}
                // email={this.state.result.results.email}
              
              />
            
          </Col>
       
          
        </Row>
       </center>
      </Container>
    );
  }
}

export default EmployeeContainer;
