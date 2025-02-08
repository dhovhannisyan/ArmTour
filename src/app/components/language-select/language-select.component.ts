import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataList } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit/components/data-list-wrapper';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

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

  languages = [
    {
      nativName: 'English',
      shortName: 'us',
    },
    {
      nativName: 'Русский',
      shortName: 'ru',
    },
    {
      nativName: 'Հայերեն',
      shortName: 'am',
    }
  ];

  languageControl = new FormControl(this.languages[0])

  ngOnInit() {
    this.languageControl.valueChanges.subscribe(lang => {
      console.log(lang);

    })
  }

}
