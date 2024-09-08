import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})

export class StructuralDirectiveComponent {  
  isVisible:Boolean = true;
  toggle:Boolean = true;
  num1:String = "";
  num2:String = "";
  ischeck:Boolean = true;
  isValue:String = "";
  visible(){
    this.isVisible=true;
  }
  INvisible(){
    this.isVisible=false;
  }
  toggled(){
    this.toggle=!this.toggle;
  }

  arr:String[] = ['USA','UK','NZ','DMK','LVS'];
  students: any[] = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 23, grade: 'C' },
    { name: 'Diana', age: 21, grade: 'A' }
  ];
  
}
