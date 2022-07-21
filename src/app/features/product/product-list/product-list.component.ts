import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../service/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
    this.products.sort(
      (firstItem, secondItem) => (firstItem.id || 0) - (secondItem.id || 0)
    );
  }
}
