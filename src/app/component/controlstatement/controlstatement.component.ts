import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlstatement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './controlstatement.component.html',
  styleUrl: './controlstatement.component.css'
})
export class ControlstatementComponent {

  isVisible:Boolean = true;
  isVis:Boolean = true;
  num1:Number = 0;
  num2:Number = 0;
  texting:String = "Select";

  showDiv(){
    this.isVisible = true;
  }
  hideDiv(){
    this.isVisible = false;
  }
  toggleDiv(){
    this.isVis = !this.isVis;
  }

  city: string[] = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
  ];

  students: any[] = [
    { id: 1, name: "Alice Johnson", age: 20, email: "alice.johnson@example.com", courses: ["Mathematics", "Computer Science", "Physics"], isEnrolled: true },
    { id: 2, name: "Bob Smith", age: 22, email: "bob.smith@example.com", courses: ["Biology", "Chemistry"], isEnrolled: true },
    { id: 3, name: "Charlie Davis", age: 19, email: "charlie.davis@example.com", courses: ["Literature", "History"], isEnrolled: false },
    { id: 4, name: "Diana Wilson", age: 21, email: "diana.wilson@example.com", courses: ["Mathematics", "Computer Science"], isEnrolled: true },
    { id: 5, name: "Edward Brown", age: 23, email: "edward.brown@example.com", courses: ["Engineering", "Physics"], isEnrolled: true },
    { id: 6, name: "Fiona Green", age: 20, email: "fiona.green@example.com", courses: ["Psychology", "Sociology"], isEnrolled: true },
    { id: 7, name: "George Harris", age: 22, email: "george.harris@example.com", courses: ["Economics", "Political Science"], isEnrolled: false },
    { id: 8, name: "Hannah Adams", age: 21, email: "hannah.adams@example.com", courses: ["Art", "Design"], isEnrolled: true },
    { id: 9, name: "Ian Clark", age: 19, email: "ian.clark@example.com", courses: ["Computer Science", "Mathematics"], isEnrolled: true },
    { id: 10, name: "Jessica Lewis", age: 22, email: "jessica.lewis@example.com", courses: ["Business", "Marketing"], isEnrolled: true }
  ];

  dayNumber:Number = 0;

}
