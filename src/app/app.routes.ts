import { Routes } from '@angular/router';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { TourDetailsComponent } from './components/tour-details/tour-details.component';

export const routes: Routes = [
  {
    path: '',
    component: TourListComponent,
    pathMatch: 'full'
  },
  {
    path: 'tours/:id',
    component: TourDetailsComponent
  }
];
