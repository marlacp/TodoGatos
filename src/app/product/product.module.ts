import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { MaterialModule } from './../material/material.module';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';


@NgModule({
  declarations: [ProductComponent, ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
