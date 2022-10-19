import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees/getAllEmployees";

class EmployeeService {

    getAllEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

}

export default new EmployeeService();