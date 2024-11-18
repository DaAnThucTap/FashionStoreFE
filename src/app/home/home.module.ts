import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeviewComponent } from './component/homeview/homeview.component';
import { HomemainComponent } from './component/homemain/homemain.component';
import { HomemainRoutingModule } from './component/homemain/homemain-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeproductComponent } from './component/homeproduct/homeproduct.component';
import { HomeproductRoutingModule } from './component/homeproduct/homeproduct-routing.module';



@NgModule({
  declarations: [
         HomeviewComponent,
         HomemainComponent,
         HomeproductComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    HomemainRoutingModule,
    HomeproductRoutingModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
