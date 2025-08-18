import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FaqPageComponent } from './faq-page.component';
import { HdNavbarModule } from 'src/app/pages/includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from 'src/app/pages/includes/hd-footer/hd-footer.module';
import { EmFaqModule } from 'src/app/pages/includes/em-faq/em-faq.module';

const routes: Routes = [
  {
    path: '',
    component: FaqPageComponent,
  },
];

@NgModule({
  declarations: [
    FaqPageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
        HdNavbarModule,
        HdFooterModule,
        EmFaqModule,
    RouterModule.forChild(routes),
  ],
})
export class FaqPageModule { }
