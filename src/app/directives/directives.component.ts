import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  selectedTab = 'tab1';



  swtab: string = 'opt1';

  onSelectTab(tab: string) {
    this.swtab = tab;
  }

  //ngstyle
  personData:any = [
    {name:"Vikranth",Country:"India"},
    {name:"Prasad",Country:"usa"},
    {name:"Piyush",Country:"India"},
    {name:"Malik",Country:"India"},
    {name:"Siddardh",Country:"UK"},
    {name:"Yash",Country:"India"},
    {name:"Basha",Country:"Soudi"}
  ];

  displayColor(Country:any):any{
    switch(Country){
      case 'India':return 'green';
      case 'usa': return 'red';
      case 'UK':return 'blue';
      case 'Soudi':return 'orange';
    }
  }

}
