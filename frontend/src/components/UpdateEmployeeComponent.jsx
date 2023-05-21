import React, { useState, useEffect} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import employeeService from '../services/employeeService';


const UpdateEmployeeComponent = () => {
    const [empId, setEmpId] = useState('');
    const [empFirstName, setEmpFirstName] = useState('');
    const [empLastName, setEmpLastName] = useState('');
    const [empJobTitle, setEmpJobTitle] = useState('');
    const [empPhone, setEmpPhone] = useState('');
    const [empEmail, setEmpEmail] = useState('');
    const [empStreet, setEmpStreet] = useState('');
    const [empCity, setEmpCity] = useState('');

    const {id} = useParams();
    console.log('Employee ID: ', id);

    const navigate = useNavigate();

    const updateEmployee = (e) => {
        e.preventDefault();

        const updatedEmp ={empId, empFirstName, empLastName, empJobTitle, empPhone, empEmail, empStreet, empCity}

        if(id) {
            employeeService.updateEmployee(id, updatedEmp).then((response) => {
                navigate('/');
                alert("Employee has been edited");
                window.location.reload(false);
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {
        employeeService.getEmployeeById(id).then((response) => {
            setEmpId(response.data.empId);
            setEmpFirstName(response.data.empFirstName);
            setEmpLastName(response.data.empLastName);
            setEmpJobTitle(response.data.empJobTitle);
            setEmpPhone(response.data.empPhone);
            setEmpEmail(response.data.empEmail);
            setEmpStreet(response.data.empStreet);
            setEmpCity(response.data.empCity);
        }).catch(error => {
            console.log(error);
        })
    }, [id])

return (
    <div>
                <div className="text-center g-0">
                    <button className="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#editEmpModal">Edit</button>
                </div>

                <div class="modal fade" id="editEmpModal" tabindex="-1" aria-labelledby="editEmpLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editEmpLabel">Edit Employee Information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="editEmpId" class="form-label">Employee ID</label>
                            <input type="number" class="form-control" value={empId} onChange={(e) => setEmpId(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="editEmpFirstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" value={empFirstName} onChange={(e) => setEmpFirstName(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empLastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" value={empLastName} onChange={(e) => setEmpLastName(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empJobTitle" class="form-label">Job Title</label>
                            <input type="text" class="form-control" value={empJobTitle} onChange={(e) => setEmpJobTitle(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empPhone" class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" value={empPhone} onChange={(e) => setEmpPhone(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empEmail" class="form-label">Email</label>
                            <input type="email" class="form-control" value={empEmail} onChange={(e) => setEmpEmail(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empStreet" class="form-label">Street</label>
                            <input type="text" class="form-control" value={empStreet} onChange={(e) => setEmpStreet(e.target.value)}></input>
                        </div>
                        <div class="mb-3">
                            <label for="empCity" class="form-label">City</label>
                            <input type="text" class="form-control" value={empCity} onChange={(e) => setEmpCity(e.target.value)}></input>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-success" onClick={(e) => updateEmployee(e)}>Edit Employee</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
)
}

export default UpdateEmployeeComponent;