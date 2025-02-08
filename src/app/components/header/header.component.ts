import { Component, OnInit } from '@angular/core';
import { LanguageSelectComponent } from '../language-select/language-select.component';

@Component({
  selector: 'app-header',
  imports: [
    LanguageSelectComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



}
