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
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees("The Matrix");
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
        
      <Container>
        
            <Card>
            </Card>
            
        <Row>
         
        <Col size="md-12">
           <SearchForm
             value={this.state.search}
             handleInputChange={this.handleInputChange}
             handleFormSubmit={this.handleFormSubmit}
           />
         </Col>
      
          <Col size="md-12">
        
            <EmployeeDetail
                  name={this.state.result.Name}
                 
                />
            
          </Col>
      
        </Row>
       
      </Container>
    );
  }
}

export default EmployeeContainer;
