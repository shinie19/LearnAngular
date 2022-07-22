import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '../../model/category';
import { ProductService } from '../../service/product.service';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = +this.activatedRoute.snapshot.params['id'];
    const product: Product = this.getProduct(this.id);
    // console.log(product);

    this.productForm = new FormGroup({
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description),
      category: new FormControl(product.category?.id),
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe((categoires) => {
      this.categories = categoires;
    });
  }

  getProduct(id: number): Product {
    let product: Product = {};
    this.productService.findById(id).subscribe((res) => {
      product = res;
    });
    return product;
  }
}
