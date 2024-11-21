import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageChangeComponent } from './language-change.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';



@NgModule({
  declarations: [LanguageChangeComponent],
  imports: [
    CommonModule,
    NzDropDownModule
  ],
  exports: [
    LanguageChangeComponent
  ]
})
export class LanguageChangeModule { }
