import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';

const routes: Routes = [
  {path:"",redirectTo:"/databind",pathMatch:"full"},
  {path:"databind",component:DatabindingComponent},
  {path:"directives",component:DirectivesComponent},
  {path:"cdirectives",component:CustomdirectivesComponent},
  {path:"parent",component:ParentcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
