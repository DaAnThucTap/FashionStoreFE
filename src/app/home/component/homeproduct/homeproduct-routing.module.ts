import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeviewComponent } from '../homeview/homeview.component';
import { HomeproductComponent } from './homeproduct.component';






const routes: Routes = [{
  path: '', component: HomeviewComponent,
  children: [
    { path: 'product', component: HomeproductComponent },
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeproductRoutingModule { }
