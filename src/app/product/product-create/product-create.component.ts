import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe((categoires) => {
      this.categories = categoires;
    });
  }

  submit() {
    const product = this.productForm.value;
    product.category = {
      id: product.category,
    };
    this.productService.saveProduct(product).subscribe(
      () => {
        alert('Tạo thành công');
        this.productForm.reset();
      },
      (e) => console.log(e)
    );
  }
}
