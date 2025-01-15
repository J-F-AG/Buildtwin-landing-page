import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCategoryComponent } from './service-category.component';
import { HdGoodCompanyModule } from 'src/app/pages/Home/hd-good-company/hd-good-company.module';



@NgModule({
  declarations: [
    ServiceCategoryComponent
  ],
  imports: [
    CommonModule,
    HdGoodCompanyModule
  ],
  exports: [
    ServiceCategoryComponent
  ]
})
export class ServiceCategoryModule { }
