import { AsyncPipe, CommonModule, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from './na.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipe, CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  fname:string = "Sonali"
  currDate:Date = new Date();

  arr:String[] = ['USA','UK','NZ','DMK','LVS'];
  students: any[] = [
    { name: 'Alice', age: 20, grade: 'A', pass:'' },
    { name: 'Bob', age: 22, grade: 'B', pass:null },
    { name: 'Charlie', age: 23, grade: 'C', pass:'Passed' },
    { name: 'Diana', age: 21, grade: 'A', pass:'' }
  ];

  currTime:Observable<Date> = new Observable<Date>;

  constructor(){
    this.currTime = interval(1000).pipe(map(()=> new Date()));
  }
}
