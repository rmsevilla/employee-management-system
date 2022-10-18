package com.example.employeeManagement.services;

import com.example.employeeManagement.models.Employees;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {

    List<Employees> getAllEmployees() throws Exception;
    Employees getEmployeeById(int empId) throws Exception;
    Employees addEmployee(Employees employee) throws Exception;
    Employees updateEmployee(Employees employee, int empId) throws Exception;
    boolean deleteEmployeeById(int empId) throws Exception;
}
