import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontSizeEditorComponent } from './features/font-size-editor/font-size-editor.component';
import { ShowPetInfoComponent } from './features/show-pet-info/show-pet-info.component';
import { ProductComponent } from './features/product/product.component';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { ColorPickerComponent } from './features/color-picker/color-picker.component';

const routes: Routes = [
  {
    path: 'font-size-editor',
    component: FontSizeEditorComponent,
  },
  {
    path: 'show-pet-info',
    component: ShowPetInfoComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'color-picker',
    component: ColorPickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
