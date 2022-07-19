import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './features/font-size-editor/font-size-editor.component';
import { ShowPetInfoComponent } from './features/show-pet-info/show-pet-info.component';
import { ProductComponent } from './features/product/product.component';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { ColorPickerComponent } from './features/color-picker/color-picker.component';

@NgModule({
  declarations: [AppComponent, FontSizeEditorComponent, ShowPetInfoComponent, ProductComponent, CalculatorComponent, ColorPickerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
