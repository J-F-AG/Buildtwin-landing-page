import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdNavbarComponent } from './hd-navbar.component';
import { LanguageChangeModule } from 'src/app/include-component/language-change/language-change.module';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HdNavbarComponent
  ],
  imports: [
    CommonModule,
    LanguageChangeModule,
    RouterModule,
    SharedModuleModule
  ],
  exports: [
    HdNavbarComponent
  ]
})
export class HdNavbarModule { 
  static HdNavbarComponent(){
    return HdNavbarComponent;
  }
 }
