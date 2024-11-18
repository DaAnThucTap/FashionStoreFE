import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';


const routes: Routes = [{
    path:'',component : AdminviewComponent,
    children: [
      { path: 'managerProduct', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)}
   
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
