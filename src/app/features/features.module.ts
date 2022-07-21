import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLinesComponent } from './time-lines/time-lines.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DictionaryPageComponent } from './dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';

const routes: Routes = [
  { path: 'timelines', component: TimeLinesComponent },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent,
      },
    ],
  },
  {
    path: 'product/list',
    component: ProductListComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductUpdateComponent,
  },
  {
    path: 'product/create',
    component: ProductCreateComponent,
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':word',
        component: DictionaryDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    TimeLinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    ProductUpdateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FeaturesModule {}
