import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataSafetyComponent } from './data-safety.component';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
import { DataSafetyFaqComponent } from './data-safety-faq/data-safety-faq.component';

const routes: Routes = [
  {
    path: '',
    component: DataSafetyComponent,
  },
];

@NgModule({
  declarations: [
    DataSafetyComponent,
    DataSafetyFaqComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
        HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class DataSafetyModule { }
