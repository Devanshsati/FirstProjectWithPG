import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive.component';
import { AssignmentComponent } from './component/assignment/assignment.component';
import { ControlstatementComponent } from './component/controlstatement/controlstatement.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { FormValidationComponent } from './component/form-validation/form-validation.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { HomeComponent } from './component/home/home.component';
import { GetApiComponent } from './component/get-api/get-api.component';
import { PostApiComponent } from './component/post-api/post-api.component';

export const routes: Routes = [
    { path: 'data-bind', component: DataBindingComponent },
    { path: 'structural', component: StructuralDirectiveComponent },
    { path: 'assign', component: AssignmentComponent },
    { path: 'control', component: ControlstatementComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'form', component: FormValidationComponent },
    { path: 'react', component: ReactiveFormComponent },
    { path: 'home', component: HomeComponent },
    { path: 'getapi', component: GetApiComponent },
    { path: 'postapi', component: PostApiComponent }
];
