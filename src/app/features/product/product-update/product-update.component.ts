import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../../../service/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {};

  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id') || '';
      this.product = this.productService.getById(+id) || {};
      console.log(this.product);
    });
  }

  submit() {
    const newProduct = {
      id: this.product.id,
      ...this.productForm.value,
    };
    // console.log(newProduct);
    this.productService.updateById(newProduct);
    this.router.navigate(['/product/list']);
  }
}
