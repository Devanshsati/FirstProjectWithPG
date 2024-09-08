import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';
import { TransactionService } from './transaction.service';
import { DepartmentService } from './department.service';
import { Employee } from './employee';
import { Product } from './product';
import { Transaction } from './transaction';
import { Department } from './department';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})

export class AssignmentComponent {
  employee: Employee[] = [];
  product: Product[] = [];
  transaction: Transaction[] = [];
  department: Department[] = [];


  constructor(private EmployeeService: EmployeeService, private ProductService: ProductService, private TransactionService: TransactionService, private DepartmentService: DepartmentService){}
  ngOnInit(): void {
    this.employee = this.EmployeeService.getEmployees();
    this.product = this.ProductService.getProducts();
    this.transaction = this.TransactionService.getTransactions();
    this.department = this.DepartmentService.getDepartments();
  }
}
