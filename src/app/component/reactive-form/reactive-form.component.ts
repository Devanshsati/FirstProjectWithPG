import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  studentForm: FormGroup = new FormGroup({
    fname: new FormControl("",[Validators.required, Validators.minLength(4)]),
    lname: new FormControl(),
    user: new FormControl("",[Validators.email]),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),
    isAccept: new FormControl()
  });

  formValue: any;

  onSave(){
    debugger;
    this.formValue = this.studentForm.value;
  }
}
