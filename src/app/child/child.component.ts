import { Component, EventEmitter,Output } from '@angular/core';
import { Student } from '../Student';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output()notify:EventEmitter<Student[]> = new EventEmitter<Student[]>;

  studentData = [
    {idno:"001",sname:"Kiran",gender:"male"},
    {idno:"002",sname:"manisha",gender:"female"},
    {idno:"003",sname:"Bharadwaj",gender:"male"},
    {idno:"004",sname:"Bhavani",gender:"female"},
    {idno:"005",sname:"vishal",gender:"male"},
    {idno:"006",sname:"Parinithi",gender:"female"}

  ]

  passdata()
  {this.notify.emit(this.studentData)}
}
