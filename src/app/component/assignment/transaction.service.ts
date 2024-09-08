import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactions: Transaction[] = [
    { cname: 'John Doe', accno: '1234567890', ttype: 'Credit', tdate: '2024-09-01', amount: 5000 },
    { cname: 'Jane Smith', accno: '2345678901', ttype: 'Debit', tdate: '2024-09-02', amount: 1500 },
    { cname: 'Emily Davis', accno: '3456789012', ttype: 'Credit', tdate: '2024-09-03', amount: 2000 },
    { cname: 'Michael Brown', accno: '4567890123', ttype: 'Debit', tdate: '2024-09-04', amount: 750 },
    { cname: 'Jessica Wilson', accno: '5678901234', ttype: 'Credit', tdate: '2024-09-05', amount: 1200 },
    { cname: 'David Johnson', accno: '6789012345', ttype: 'Debit', tdate: '2024-09-06', amount: 3000 },
    { cname: 'Sarah Lee', accno: '7890123456', ttype: 'Credit', tdate: '2024-09-07', amount: 4500 },
    { cname: 'Daniel Clark', accno: '8901234567', ttype: 'Debit', tdate: '2024-09-08', amount: 2200 },
    { cname: 'Laura Turner', accno: '9012345678', ttype: 'Credit', tdate: '2024-09-09', amount: 3500 },
    { cname: 'Paul Walker', accno: '0123456789', ttype: 'Debit', tdate: '2024-09-10', amount: 500 }
  ];

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  constructor() { }
}
