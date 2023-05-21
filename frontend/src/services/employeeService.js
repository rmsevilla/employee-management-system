import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {

    getAllEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/getAllEmployees")
    }

    getEmployeeById(empId) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/getEmployeeById/" + empId)
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/addEmployee", employee)
    }

    updateEmployee(empId, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/updateEmployee/" + empId, employee)
    }

    delete(empId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/delete/" + empId)
    }

}

export default new EmployeeService();