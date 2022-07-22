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
    const category: Category = this.getCategory(this.id);
    console.log(category);

    this.categoryForm = new FormGroup({
      name: new FormControl(category.name),
    });
  }

  ngOnInit() {}

  getCategory(id: number): Category {
    let category: Category = {};
    this.categoryService.findById(id).subscribe((cat) => {
      category = cat;
    });
    return category;
  }

  updateCategory(id: number) {
    const category = {
      id: this.id,
      ...this.categoryForm.value,
    };
    this.categoryService.updateCategory(id, category).subscribe((res) => {
      alert('Cập nhật thành công');
      this.router.navigate(['/category/list']);
    });
  }
}
