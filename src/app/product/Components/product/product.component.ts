import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { Product } from './../../../Core/models/Product.module';
// importamos nuestro servicio de carrito
import { CartService } from './../../../Core/Services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(
    // ingresamos como una inyeccion de dependencias
    private cartService: CartService
  ) { }

  ngOnInit() {
  }
  addCart() {
    console.log('añadir al carrito');
    // voy al servicio de cartservise y agrego un producto al carrito
    this.cartService.addCart(this.product);

  }


}
