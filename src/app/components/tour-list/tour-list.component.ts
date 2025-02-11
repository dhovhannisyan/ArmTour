import { Component } from '@angular/core';
import { TourItemComponent } from '../tour-item/tour-item.component';
import { Tour } from '../../models/tour.model';
import { mockTours } from '../../../assets/mock-data/mock-tours';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  imports: [
    TourItemComponent,
    RouterLink
  ],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.scss'
})
export class TourListComponent {
  tours: Tour[] = mockTours;
}
