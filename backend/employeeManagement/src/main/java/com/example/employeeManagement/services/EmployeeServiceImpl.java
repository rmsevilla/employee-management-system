package com.example.employeeManagement.services;

import com.example.employeeManagement.models.Employees;
import com.example.employeeManagement.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository empRepo;

    @Override
    public List<Employees> getAllEmployees() throws Exception {
        return empRepo.findAll();
    }

    @Override
    public Employees getEmployeeById(int empId) throws Exception {
        if(empRepo.findById(empId).isPresent()){
            return empRepo.findById(empId).get();
        }
        System.out.println("Employee with id: " + empId + "was not found.");
        throw new Exception();
    }

    @Override
    public Employees addEmployee(Employees employee) throws Exception{
        Optional<Employees> empOptional = empRepo.findById(employee.getEmpId());
        if(!empOptional.isPresent()) {
            return empRepo.save(employee);
        } else {
            throw new Exception();
        }
    }

    @Override
    public Employees updateEmployee(Employees employee, int empId) throws Exception {
        Optional<Employees> empOptional = empRepo.findById(empId);
        if(empOptional.isPresent()) {
            Employees update = empOptional.get();
            update.setEmpId(employee.getEmpId());
            update.setEmpFirstName(employee.getEmpFirstName());
            update.setEmpLastName(employee.getEmpLastName());
            update.setEmpJobTitle(employee.getEmpJobTitle());
            update.setEmpPhone(employee.getEmpPhone());
            update.setEmpEmail(employee.getEmpEmail());
            update.setEmpStreet(employee.getEmpStreet());
            update.setEmpCity(employee.getEmpCity());

            empRepo.save(update);
        }
        throw new Exception();
    }

    @Override
    public boolean deleteEmployeeById(int empId) throws Exception {
        if(!empRepo.findById(empId).isPresent()) {
            System.out.println("Employee with id: " + empId + " was not found and cannot be deleted.");
            throw new Exception();
        } else {
            empRepo.deleteById(empId);
            return true;
        }
    }
}
