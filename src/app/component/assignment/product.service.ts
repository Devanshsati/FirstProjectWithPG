import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { pname: 'Laptop', pid: 101, qty: 10, rate: 70000, amount: 700000 },
    { pname: 'Smartphone', pid: 102, qty: 15, rate: 30000, amount: 450000 },
    { pname: 'Tablet', pid: 103, qty: 8, rate: 20000, amount: 160000 },
    { pname: 'Monitor', pid: 104, qty: 5, rate: 15000, amount: 75000 },
    { pname: 'Keyboard', pid: 105, qty: 20, rate: 2000, amount: 40000 },
    { pname: 'Mouse', pid: 106, qty: 25, rate: 1000, amount: 25000 },
    { pname: 'Printer', pid: 107, qty: 7, rate: 5000, amount: 35000 },
    { pname: 'Headphones', pid: 108, qty: 12, rate: 3000, amount: 36000 },
    { pname: 'Webcam', pid: 109, qty: 6, rate: 4000, amount: 24000 },
    { pname: 'Router', pid: 110, qty: 9, rate: 2500, amount: 22500 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  constructor() { }
}
