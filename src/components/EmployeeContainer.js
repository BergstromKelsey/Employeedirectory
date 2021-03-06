
import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import API from "../utils/API";

//set state
class EmployeeContainer extends Component {
  state = {
    employees: [],
    search: ""
  };

//Retriever info from the API, in an array form, then set to state
  componentDidMount() {
    API.searchEmployees()
      .then(res => {
        const employeeArray = res.data.results.map(employee => {
          return {
            firstname: employee.name.first,
            lastname: employee.name.last,
            email: employee.email,
            dob: employee.dob.date,
            location: employee.location.city,
            image: employee.picture.medium
          }
        });
        this.setState({ employees: employeeArray })

      })
      .catch(err => console.log(err));
  }

//narrow search results to what the user searches
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };


//filter through all the employees to match user input 
  filteredEmployees() {
    const search = this.state.search.toLowerCase();
    return this.state.employees.filter(employee => {
      return (
        employee.firstname.toLowerCase().includes(search) ||
        employee.lastname.toLowerCase().includes(search)
      );
    });
  }

//render all employee information from the API
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
            <td>{employee.location}</td>
            <td>{new Date(employee.dob).toDateString()}</td>
          </tr>
        );
      });
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

          {/*THIS IS WHAT WAS MISSING FOR THE SEARCH TO WORKKKKKKKKKK! */}
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
                  <th scope="col">Photo</th>
                  <th scope="col">

                    <span>
                      First Name
                     </span>
                  </th>
                  <th scope="col">
                    <span>
                      Last Name
                     </span>
                  </th>
                  <th scope="col">
                    <span>
                      Email
                     </span>
                 </th>
                 <th scope="col">
                    <span>
                      City
                     </span>
                  </th>
                  <th scope="col">
                    <span>
                      Date of Birth
                     </span>
                  </th>
                </tr>
              </thead>
              {/* display all employees and there info on body */}
              <tbody>{this.renderEmployees()}</tbody>

            </table>
          </div>
        </Container>


      </center>


    )
  }
}
export default EmployeeContainer;