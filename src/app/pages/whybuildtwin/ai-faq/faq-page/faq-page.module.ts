import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { AiFaqPageComponent } from './faq-page.component';
import { HdNavbarModule } from 'src/app/pages/includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from 'src/app/pages/includes/hd-footer/hd-footer.module';
import { EmFaqModule } from 'src/app/pages/includes/em-faq/em-faq.module';

const routes: Routes = [
  {
    path: '',
    component: AiFaqPageComponent,
  },
];

@NgModule({
  declarations: [
    AiFaqPageComponent
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
export class AiFaqPageModule { }
