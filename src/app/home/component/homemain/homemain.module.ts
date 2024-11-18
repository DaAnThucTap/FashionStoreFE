import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemainRoutingModule } from './homemain-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeviewComponent } from '../homeview/homeview.component';


@NgModule({
  declarations: [
    HomeviewComponent
  ],
  imports: [
 
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    HomemainRoutingModule,
    FormsModule,

  ]
})
export class HomeMainModule { }
