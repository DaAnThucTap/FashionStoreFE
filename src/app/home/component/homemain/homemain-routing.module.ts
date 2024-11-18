import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeviewComponent } from '../homeview/homeview.component';
import { HomemainComponent } from './homemain.component';





const routes: Routes = [{
  path: '', component: HomeviewComponent,
  children: [
    { path: 'home', component: HomemainComponent },
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemainRoutingModule { }
