import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../model/category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss'],
})
export class CategoryUpdateComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = +this.activatedRoute.snapshot.params['id'];
    const category = this.getCategory(this.id) || {};
    console.log(category);

    this.categoryForm = new FormGroup({
      id: new FormControl(category.id),
      name: new FormControl(category.name),
    });
  }

  ngOnInit() {}

  getCategory(id: number) {
    return this.categoryService.findById(id);
  }

  updateCategory(id: number) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category);
    alert('Cập nhật thành công');
    this.router.navigate(['/category/list']);
  }
}
