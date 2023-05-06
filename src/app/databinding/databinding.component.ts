import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})


export class DatabindingComponent {

  dtBinding = ["String Interpolation","Attribute Binding","Event Binding","Two way Data binding"];
  //attribute binding variable
  mrulogo = "mrulogo.webp";
  imgpath = "./assets/images/"
  //for two way databinding
  userName: string = 'Mallareddy University';
  user: User = {
    name: '',
    email: '',
    phone: ''
  };

  save() {
    console.log('Saving user:', this.user);
  }

  handleClick(){
    alert("button clicked successfully")
  }

}
