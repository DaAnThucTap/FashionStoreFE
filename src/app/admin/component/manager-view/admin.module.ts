import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminviewComponent } from './adminview/adminview.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductComponent } from './product/product.component';





@NgModule({
  declarations: [
    AdminviewComponent,
    ProductComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FormsModule,
    MatSnackBarModule,
  ]
})
export class AdminModule { }
