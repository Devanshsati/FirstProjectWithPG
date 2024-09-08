import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private employees: Employee[] = [
    { id: 1, name: 'Alice', salary: 50000, hra: 5000, ma: 2000, ta: 1000, pf: 4000, gp: 58000, np: 54000 },
    { id: 2, name: 'Bob', salary: 60000, hra: 6000, ma: 2500, ta: 1500, pf: 4800, gp: 66500, np: 61700 },
    { id: 3, name: 'Charlie', salary: 70000, hra: 7000, ma: 3000, ta: 2000, pf: 5600, gp: 77000, np: 71400 },
    { id: 4, name: 'David', salary: 55000, hra: 5500, ma: 2200, ta: 1100, pf: 4400, gp: 61600, np: 57200 },
    { id: 5, name: 'Eve', salary: 65000, hra: 6500, ma: 2700, ta: 1400, pf: 5200, gp: 73200, np: 68000 },
    { id: 6, name: 'Frank', salary: 75000, hra: 7500, ma: 3200, ta: 1700, pf: 6000, gp: 83200, np: 77200 },
    { id: 7, name: 'Grace', salary: 80000, hra: 8000, ma: 3500, ta: 1800, pf: 6400, gp: 89700, np: 83300 },
    { id: 8, name: 'Hank', salary: 72000, hra: 7200, ma: 3000, ta: 1600, pf: 5760, gp: 82200, np: 76440 },
    { id: 9, name: 'Ivy', salary: 68000, hra: 6800, ma: 2800, ta: 1500, pf: 5440, gp: 75600, np: 70160 },
    { id: 10, name: 'Jack', salary: 59000, hra: 5900, ma: 2300, ta: 1200, pf: 4720, gp: 66500, np: 61780 },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  constructor() { }
}
