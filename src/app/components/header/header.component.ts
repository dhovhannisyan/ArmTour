import { Component, OnInit } from '@angular/core';
import { LanguageSelectComponent } from '../language-select/language-select.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    LanguageSelectComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



}
