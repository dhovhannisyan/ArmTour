import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';
import { LanguageService } from '../../services/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-tour-item',
  imports: [
    AsyncPipe,
    TruncatePipe
  ],
  templateUrl: './tour-item.component.html',
  styleUrl: './tour-item.component.scss'
})
export class TourItemComponent implements OnInit {

  private languageService: LanguageService = inject(LanguageService);
  public language$ = this.languageService.currentLanguageChange$.pipe(map(lang => lang.shortName));

  @Input({ required: true }) tour: Tour;

  ngOnInit() {

  }

}
