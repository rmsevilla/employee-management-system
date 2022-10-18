package com.example.employeeManagement.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employees")
public class Employees {
    @Id
    int empId;

    private String empFirstName;

    private String empLastName;

    private String empJobTitle;

    private String empPhone;

    private String empEmail;

    private String empStreet;

    private String empCity;

    public Employees() {
        super();
    }

    public Employees(int empId, String empFirstName, String empLastName, String empJobTitle,
                     String empPhone, String empEmail, String empStreet, String empCity) {
        super();
        this.empId = empId;
        this.empFirstName = empFirstName;
        this.empLastName = empLastName;
        this.empJobTitle = empJobTitle;
        this.empPhone = empPhone;
        this.empEmail = empEmail;
        this.empStreet = empStreet;
    }

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpFirstName() {
        return empFirstName;
    }

    public void setEmpFirstName(String empFirstName) {
        this.empFirstName = empFirstName;
    }

    public String getEmpLastName() {
        return empLastName;
    }

    public void setEmpLastName(String empLastName) {
        this.empLastName = empLastName;
    }

    public String getEmpJobTitle() {
        return empJobTitle;
    }

    public void setEmpJobTitle(String empJobTitle) {
        this.empJobTitle = empJobTitle;
    }

    public String getEmpPhone() {
        return empPhone;
    }

    public void setEmpPhone(String empPhone) {
        this.empPhone = empPhone;
    }

    public String getEmpEmail() {
        return empEmail;
    }

    public void setEmpEmail(String empEmail) {
        this.empEmail = empEmail;
    }

    public String getEmpStreet() {
        return empStreet;
    }

    public void setEmpStreet(String empStreet) {
        this.empStreet = empStreet;
    }

    public String getEmpCity() {
        return empCity;
    }

    public void setEmpCity(String empCity) {
        this.empCity = empCity;
    }

    @Override
    public String toString() {
        return "Employees{" +
                "empId=" + empId +
                ", empFirstName='" + empFirstName + '\'' +
                ", empLastName='" + empLastName + '\'' +
                ", empJobTitle='" + empJobTitle + '\'' +
                ", empPhone='" + empPhone + '\'' +
                ", empEmail='" + empEmail + '\'' +
                ", empStreet='" + empStreet + '\'' +
                ", empCity='" + empCity + '\'' +
                '}';
    }
}
