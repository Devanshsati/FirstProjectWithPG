import { Injectable } from '@angular/core';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments: Department[] = [
    { deptno: 1, dname: 'HR', loc: 'New York' },
    { deptno: 2, dname: 'Finance', loc: 'London' },
    { deptno: 3, dname: 'IT', loc: 'San Francisco' },
    { deptno: 4, dname: 'Marketing', loc: 'Paris' },
    { deptno: 5, dname: 'Sales', loc: 'Berlin' },
    { deptno: 6, dname: 'Customer Support', loc: 'Tokyo' },
    { deptno: 7, dname: 'Operations', loc: 'Sydney' },
    { deptno: 8, dname: 'Legal', loc: 'Toronto' },
    { deptno: 9, dname: 'Product Management', loc: 'Dubai' },
    { deptno: 10, dname: 'R&D', loc: 'Shanghai' }
  ];

  getDepartments(): Department[] {
    return this.departments;
  }
}
