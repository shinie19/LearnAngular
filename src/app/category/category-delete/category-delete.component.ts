import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss'],
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup;
  id: number;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = +this.activatedRoute.snapshot.params['id'];
    const category = this.getCategory(this.id) || {};
    this.categoryForm = new FormGroup({
      id: new FormControl(category.id),
      name: new FormControl(category.name),
    });
  }

  ngOnInit() {}

  getCategory(id: number) {
    return this.categoryService.findById(id);
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id);
    this.router.navigate(['/category/list']);
  }
}
