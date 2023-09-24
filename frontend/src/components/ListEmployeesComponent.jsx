import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import employeeService from '../services/employeeService';
import AddEmployeeComponent from './AddEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';


class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
                employees: []
         }
         this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        employeeService.getAllEmployees().then((res) => {
            const sortedEmployees = res.data.sort((a, b) => a.empId - b.empId);
            this.setState({employees: sortedEmployees});
        });
    }

    deleteEmployee(id){
        employeeService.delete(id).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.empId !== id)});
        });
    }
    render() { 
        return ( 
            <div>


                <br></br>

                <h3>Employee List</h3>

                <AddEmployeeComponent/>

                <br></br>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="table-secondary">
                            <th className="text-center">Employee ID</th>
                            <th className="text-center">First Name</th>
                            <th className="text-center">Last Name</th>
                            <th className="text-center">Job Title</th>
                            <th className="text-center">Phone Number</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Street</th>
                            <th className="text-center">City</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key = {employee.empId}>
                                    <td className="text-center">{employee.empId}</td>
                                    <td className="text-center">{employee.empFirstName}</td>
                                    <td className="text-center">{employee.empLastName}</td>
                                    <td className="text-center">{employee.empJobTitle}</td>
                                    <td className="text-center">{employee.empPhone}</td>
                                    <td className="text-center">{employee.empEmail}</td>
                                    <td className="text-center">{employee.empStreet}</td>
                                    <td className="text-center">{employee.empCity}</td>
                                    <td>
                                        <div className="row g-0">
                                            <div className="col col-sm-6 px-0">
                                                <Link to={`/${employee.empId}`} style={{color: "black"}}><UpdateEmployeeComponent/></Link>
                                            </div>
                                            <div className="col col-sm-6 px-0">
                                                <button className="btn btn-danger rounded-pill" onClick = {() => this.deleteEmployee(employee.empId)}>Delete</button>
                                            </div>
                                        </div>    
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}
 
export default ListEmployeesComponent;