import React, { Component } from 'react';
import employeeService from '../services/employeeService';


class ListEmployeesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
                employees: []
         }
    }

    componentDidMount() {
        employeeService.getAllEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
    render() { 
        return ( 
            <div>

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
                            <th className="text-center">Actions</th>
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