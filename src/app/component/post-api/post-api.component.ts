import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css'] 
})
export class PostApiComponent implements OnInit {
  http = inject(HttpClient);
  
  deptmentObj: any = {
    deptid: 0,
    dname: '',
    dlogo: '',
  };
  deptlist: any[] = []; 

  ngOnInit(): void {
    this.getDeptartment();
  }

  onSave() {
    if (!this.deptmentObj.dname.trim()) {
      alert('Department Name is required.');
      return;
    }
    
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.deptmentObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department Created');
        this.getDeptartment();
      } else {
        alert(res.message);
        console.log(res.message);
      }
    });
  }

  getDeptartment() {
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res: any) => {
      this.deptlist = res.data;
    });
  }

  resetForm() {
    this.deptmentObj = {
      deptid: 0,
      dname: '',
      dlogo: '',
    };
  }  
}
