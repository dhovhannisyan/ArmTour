import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataList } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit/components/data-list-wrapper';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { Language } from '../../models/language.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../services/language.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-language-select',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataList,
    TuiDataListWrapper,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './language-select.component.html',
  styleUrl: './language-select.component.scss'
})
export class LanguageSelectComponent implements OnInit {

  languageService: LanguageService = inject(LanguageService);

  languages: Language[] = this.languageService.languages;

  languageControl: FormControl<Language>;

  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this.initCurrentLanguage();
    this.subscribeToLanguageChange();
  }

  subscribeToLanguageChange() {
    this.languageControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(lang => {
        this.languageService.setCurrentLanguage(lang);
      });
  }

  initCurrentLanguage() {
    this.languageService.currentLanguageChange$.pipe(take(1)).subscribe(lang => {
      this.languageControl = new FormControl(lang, { nonNullable: true });
    });
  }

}
