import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLinesComponent } from './time-lines/time-lines.component';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    path: 'product/create',
    component: ProductCreateComponent,
  },
  // { path: 'register', component: RegisterComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    TimeLinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class FeaturesModule {}
