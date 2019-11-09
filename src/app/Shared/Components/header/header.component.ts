import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../Core/Services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total = 0;
  constructor(
    private cartService: CartService
  ) {
    // 1ra manera de hacerlo
    // escuchamos dinamicamente nuestro carrito
    this.cartService.cart$.subscribe( products => {
      console.log(products);
      this.total = products.length;
    });
  }

  ngOnInit() {
  }

}
