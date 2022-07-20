import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './features/article/article.component';
import { LikeComponentComponent } from './features/like-component/like-component.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, ArticleComponent, LikeComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
