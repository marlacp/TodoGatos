import { Injectable } from '@angular/core';
// principios reactivos
import { BehaviorSubject } from 'rxjs';
// añadimos nuestro modelo porque vamos a ir guardando en un array los productos del carrito
import { Product } from './../models/Product.module';



@Injectable({
  providedIn: 'root'
})
export class CartService {
// array de los productos
  private products: Product[] = [];
  // instancia de BehaviorSubject, y el carrito inicia con cero productos
  private cart = new BehaviorSubject <Product[]>([]);

  // variable publica que es preguntada por cualquier componente y es de tipo observable
   cart$ = this.cart.asObservable();
  constructor() { }
    // agregamos al carrtio
    addCart(product: Product) {
      // cada vez que agreguen algo al carrito se incerta una nueva variable
      // practica de no mutacion, se crea una nueva referencia del arreglo
      this.products = [...this.products, product];
      // aqui notificamos a todos los componentes que esten suscritos que hubo un cambio
      // le enviamos la copia del array actual
      this.cart.next(this.products);
  }
}
