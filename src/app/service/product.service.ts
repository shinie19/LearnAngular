import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New',
    },
    {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new',
    },
    {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%',
    },
    {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%',
    },
    {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new',
    },
  ];

  constructor() {}

  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  updateById(product: Product) {
    this.products.forEach((prod, i) => {
      if (prod.id == product.id) {
        console.log('aaa', prod);
        this.products.splice(i, 1);
      }
    });
    this.products.push(product);
  }
}
