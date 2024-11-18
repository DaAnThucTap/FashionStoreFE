import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductRoutingModule } from './product-routing.module';
import { ManagerProductComponent } from './manager-product/manager-product.component';
import { ListProductComponent } from './list-product/list-product.component';



@NgModule({
  declarations: [
    ManagerProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
