import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ListProductComponent } from './list-product/list-product.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes=[
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ListProductComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
