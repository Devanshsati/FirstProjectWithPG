import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],  // Include CommonModule here
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  listBoxForm: FormGroup;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.listBoxForm = this.fb.group({
      selectedItems: [[]]
    });
  }

  transfertoStu(){
    this.router.navigateByUrl("structural");
  }

  get selectedItems() {
    return this.listBoxForm.get('selectedItems')?.value || [];
  }
}
