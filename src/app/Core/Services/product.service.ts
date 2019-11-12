import { Injectable } from '@angular/core';

import { Product } from './../models/Product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
        id: '1',
        image: 'assets/images/Alfombra-Para-Gatos.jpg',
        title: 'Alfombra Para gatos',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '2',
        image: 'assets/images/Árbol-Para-Gato.jpg',
        title: 'Árbol para tu Gato',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '3',
        image: 'assets/images/Medias.PNG',
        title: 'Medias de Gatitos',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '4',
        image: 'assets/images/Juguete-Para-Gatos.jpg',
        title: 'Juguetes Para Gatos',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '5',
        image: 'assets/images/Pantuflas-cats.jpg',
        title: 'Pantuflas de Gatos',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '6',
        image: 'assets/images/Sueter-Gato.PNG',
        title: 'Sueter de Gato',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
