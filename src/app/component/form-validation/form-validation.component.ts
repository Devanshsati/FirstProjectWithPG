import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
  stuObj: any = {
    fname : '',
    lname : '',
    user : '',
    city : '',
    state : '',
    zip : '',
    isAccept : false
  }
  formValue: any;

  onSubmit(){
    debugger;
    this.formValue = this.stuObj
  }

  onReset(){
    this.stuObj={
      fname : '',
    lname : '',
    user : '',
    city : '',
    state : '',
    zip : '',
    isAccept : false
    }
  }

}
