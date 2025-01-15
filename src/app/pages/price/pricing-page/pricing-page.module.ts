import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { PricingPageComponent } from './pricing-page.component';
import { HdPricingComponent } from '../hd-pricing/hd-pricing.component';
import { PriceMonthlyComponent } from '../price-monthly/price-monthly.component';
import { PriceCoPilotComponent } from '../price-co-pilot/price-co-pilot.component';
import { PriceBasicComponent } from '../price-basic/price-basic.component';

const routes: Routes = [
  {
    path: '',
    component: PricingPageComponent,
  },
];

@NgModule({
  declarations: [
    PricingPageComponent,
    HdPricingComponent,
    PriceCoPilotComponent,
    PriceMonthlyComponent,
    PriceBasicComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class PricingPageModule { }
