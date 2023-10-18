import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
 
  createEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.createEmployee).subscribe( data =>{
      console.log(data);
      this.getEmployees();
    },
    error => console.log(error));
  }
  
  onSubmit(){
    console.log(this.createEmployee);
    this.saveEmployee();
  }


}