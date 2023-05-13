import { Component,ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Student } from '../Student';
@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  childData:Student[] = [];

  filteredData: Student[] = [];
  filterValue: string = 'all';

//this method initialize the data
  ngAfterViewInit() {
    this.childComponent.passdata();
    this.applyFilter(this.filterValue);
  }


  parentmethod(data:Student[]){
this.childData = data;
//this.applyFilter(this.filterValue);

  }

  applyFilter(value: string) {
    this.filterValue = value;
    if (value === 'all') {
      this.filteredData = this.childData; // Show all records
    } else {
      this.filteredData = this.childData.filter(student => student.gender === value); // Filter based on gender
    }

}
}
