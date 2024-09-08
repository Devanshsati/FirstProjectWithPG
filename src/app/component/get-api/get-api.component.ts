import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { error } from 'node:console';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  http = inject(HttpClient);
  customerList: any[] = [];
  userList: any[] = [];

  getAllUser(){
    debugger
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList = res;
    });
  }

  getAllCustomer(){
    debugger
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
      this.customerList = res.data;
    },error => {
      debugger;
    });
  }
}
