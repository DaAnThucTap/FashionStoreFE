import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeviewComponent } from './component/homeview/homeview.component';


const routes: Routes = [{
path:'',component : HomeviewComponent,
  children: [
   
   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
