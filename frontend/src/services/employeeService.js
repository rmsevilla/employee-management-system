import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {

    getAllEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL + "/getAllEmployees")
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + "/addEmployee", employee)
    }

}

export default new EmployeeService();