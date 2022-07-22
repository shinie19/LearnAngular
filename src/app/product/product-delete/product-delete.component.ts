import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = +this.activatedRoute.snapshot.params['id'];
    const product: Product = this.getProduct(this.id);

    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
    });
  }

  ngOnInit() {}

  getProduct(id: number): Product {
    let prod: Product = {};
    this.productService.findById(id).subscribe((res) => {
      prod = res;
    });
    return prod;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.router.navigate(['/product/list']);
      },
      (e) => console.log(e)
    );
  }
}
