package com.example.employeeManagement;

import com.example.employeeManagement.models.Employees;
import com.example.employeeManagement.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/employees")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EmployeeController {

    @Autowired
    EmployeeService empService;

    @GetMapping("/getAllEmployees")
    public ResponseEntity<List<Employees>> getAllEmployees() throws Exception{
        return new ResponseEntity<List<Employees>>(empService.getAllEmployees(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/getEmployeeById/{empId}")
    public ResponseEntity<?> getEmployeeById(@PathVariable("empId") int empId) throws Exception{
        try {
            return new ResponseEntity<Employees>(empService.getEmployeeById(empId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>("Employee of id: " + empId + " was not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<?> addEmployee(@RequestBody Employees employee) throws Exception {
        try {
            return new ResponseEntity<Employees>(empService.addEmployee(employee), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>("Unable to add employee", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/updateEmployee/{empId}")
    public ResponseEntity<?> updateEmployees(@PathVariable("empId") int empId, @RequestBody Employees employee) throws Exception{
        try {
            return new ResponseEntity<Employees>(empService.updateEmployee(employee, empId), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>("Employee with id: " + empId + " could not be updated", HttpStatus.NOT_FOUND);

        }
    }

    @DeleteMapping("/delete/{empId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable int empId) throws Exception{
        try {
            return new ResponseEntity<Boolean>(empService.deleteEmployeeById(empId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>("Unable to delete employee with id: " + empId, HttpStatus.NOT_FOUND);
        }
    }

}
