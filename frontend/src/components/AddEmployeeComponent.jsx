import React, { Component } from 'react';
import employeeService from '../services/employeeService';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            empId: '',
            empFirstName: '',
            empLastName: '',
            empJobTitle: '',
            empEmail: '',
            empPhone: '',
            empStreet: '',
            empCity: ''
         }

         this.empIdHandler = this.empIdHandler.bind(this);
         this.firstNameHandler = this.firstNameHandler.bind(this);
         this.lastNameHandler = this.lastNameHandler.bind(this);
         this.empJobTitleHandler = this.empJobTitleHandler.bind(this);
         this.empPhoneHandler = this.empPhoneHandler.bind(this);
         this.empEmailHandler = this.empEmailHandler.bind(this);
         this.empStreetHandler = this.empStreetHandler.bind(this);
         this.empCityHandler = this.empCityHandler.bind(this);
         this.saveEmployee = this.saveEmployee.bind(this);
    }

    empIdHandler= (event) => {
        this.setState({empId: event.target.value});
    }

    firstNameHandler= (event) => {
        this.setState({empFirstName: event.target.value});
    } 

    lastNameHandler= (event) => {
        this.setState({empLastName: event.target.value});
    } 

    empJobTitleHandler= (event) => {
        this.setState({empJobTitle: event.target.value});
    }

    empPhoneHandler= (event) => {
        this.setState({empPhone: event.target.value});
    }

    empEmailHandler= (event) => {
        this.setState({empEmail: event.target.value});
    }

    empStreetHandler= (event) => {
        this.setState({empStreet: event.target.value});
    }

    empCityHandler= (event) => {
        this.setState({empCity: event.target.value});
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {empId: this.state.empId, empFirstName: this.state.empFirstName, empLastName: this.state.empLastName,
                        empJobTitle: this.state.empJobTitle, empPhone: this.state.empPhone, empEmail: this.state.empEmail, empCity: this.state.empCity, empStreet: this.state.empStreet};
        console.log('employee => ' + JSON.stringify(employee));
        alert("Employee added");
        
        employeeService.addEmployee(employee).then(res => {
            window.location.reload(false);
        });

        this.setState({empId: "", empFirstName:"", empLastName: "", empJobTitle: "", empPhone: "", empEmail: "", empStreet: "", empCity: ""});
    }

    cancel = () => {
        this.setState({empId: "", empFirstName:"", empLastName: "", empJobTitle: "", empPhone: "", empEmail: "", empStreet: "", empCity: ""});
    }



    render() { 
        return ( 
            <div>
                <div className="row">
                    <div className="col-md-12 text-end" style={{paddingRight: `76px`}}>
                        <button type="button" className="btn btn-success rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Employee</button>
                    </div>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Enter Employee Information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="empId" class="form-label">Employee ID</label>
                            <input type="number" class="form-control" value={this.state.empId} onChange={this.empIdHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empFirstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" value={this.state.empFirstName} onChange={this.firstNameHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empLastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" value={this.state.empLastName} onChange={this.lastNameHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empJobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control" value={this.state.empJobTitle} onChange={this.empJobTitleHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empPhone" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" value={this.state.empPhone} onChange={this.empPhoneHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" value={this.state.empEmail} onChange={this.empEmailHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empStreet" class="form-label">Street</label>
                            <input type="text" class="form-control" value={this.state.empStreet} onChange={this.empStreetHandler}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empCity" class="form-label">City</label>
                            <input type="text" class="form-control" value={this.state.empCity} onChange={this.empCityHandler}></input>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={this.cancel.bind(this)}>Cancel</button>
                        <button type="button" class="btn btn-success" onClick={this.saveEmployee}>Add Employee</button>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}
 
export default AddEmployeeComponent;

