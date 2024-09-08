import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from "./component/structural-directive/structural-directive.component";
import { AssignmentComponent } from "./component/assignment/assignment.component";
import { ControlstatementComponent } from './component/controlstatement/controlstatement.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetApiComponent } from './component/get-api/get-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DataBindingComponent, StructuralDirectiveComponent, AssignmentComponent, ControlstatementComponent, PipesComponent, ReactiveFormsModule, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProjectWithPG';
}
