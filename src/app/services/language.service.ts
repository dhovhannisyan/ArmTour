import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public languages: Language[] = [
    {
      nativeName: 'English',
      shortName: 'en',
    },
    {
      nativeName: 'Русский',
      shortName: 'ru',
    },
    {
      nativeName: 'Հայերեն',
      shortName: 'am',
    }
  ];

  private currentLanguageChangeSubject$: BehaviorSubject<Language> = new BehaviorSubject(this.currentLanguage);
  public currentLanguageChange$: Observable<Language> = this.currentLanguageChangeSubject$.asObservable();

  private get currentLanguage(): Language {
    const langString = localStorage.getItem('lang');
    let language: Language;
    if (langString) {
      language = JSON.parse(langString) as Language;
    } else {
      language = this.languages[0];
    }
    return language;
  }

  private set currentLanguage(lang: Language) {
    localStorage.setItem('lang', JSON.stringify(lang));
  }

  public setCurrentLanguage(language: Language) {
    this.currentLanguage = language;
    this.currentLanguageChangeSubject$.next(language);
  }

}
