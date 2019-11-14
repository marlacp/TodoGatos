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
        price: 19.8,
        // tslint:disable-next-line: max-line-length
        description: 'El diseño de nido de abeja de doble capa lo ayuda a juntar camadas en la capa superior y la deja pasar a través de los agujeros hasta la capa inferior. La capa inferior es resistente al agua y no permite el paso de ningún líquido. Proteja sus pisos de madera y alfombras de las manchas de orina desagradables.'
      },
      {
        id: '2',
        image: 'assets/images/Árbol-Para-Gato.jpg',
        title: 'Árbol para tu Gato',
        price: 95.76,
        // tslint:disable-next-line: max-line-length
        description: 'Tus amigos felinos necesitan una casa acogedora para donde jugar, echar una siesta o saltar; los gatos estarán encantados con esta casita'
      },
      {
        id: '3',
        image: 'assets/images/Medias.PNG',
        title: 'Medias de Gatitos',
        price: 5,
        description: 'Hermosas medias con motivo de lindos felinos'
      },
      {
        id: '4',
        image: 'assets/images/Juguete-Para-Gatos.jpg',
        title: 'Juguetes Para Gatos',
        price: 19.5,
        // tslint:disable-next-line: max-line-length
        description: 'Equipado con un motor eléctrico para girar el juguete de plumas de una manera divertida para que tu gato juege, estimulando el instinto de caza de gato. Con una acción aleatoria y movimiento, el juguete puede moverse'
      },
      {
        id: '5',
        image: 'assets/images/Pantuflas-cats.jpg',
        title: 'Pantuflas de Gatos',
        price: 10,
        description: 'Lindas pantuflas que encontraras en diferentes tallas'
      },
      {
        id: '6',
        image: 'assets/images/Sueter-Gato.PNG',
        title: 'Sueter de Gato',
        price: 25,
        description: 'Hermoso sueter de color negro y estampado de gatito'
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
