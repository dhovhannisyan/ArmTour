import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../../models/tour.model';
import { mockTours } from '../../../assets/mock-data/mock-tours';
import { LanguageService } from '../../services/language.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TuiCarousel } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-tour-details',
  imports: [
    AsyncPipe,
    TuiButton,
    TuiCarousel,
  ],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss'
})
export class TourDetailsComponent {

  tour: Tour;
  private languageService: LanguageService = inject(LanguageService);
  public language$ = this.languageService.currentLanguageChange$.pipe(map(lang => lang.shortName));


  constructor(private activatedRoute: ActivatedRoute) {
    const tourId = +this.activatedRoute.snapshot.params['id'];
    if (tourId) {
      this.tour = mockTours.find(t => t.id === tourId);
    }
  }

}
