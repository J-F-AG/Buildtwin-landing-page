import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { PricingPageComponent } from './pricing-page.component';
import { HdPricingComponent } from '../hd-pricing/hd-pricing.component';
import { PriceMonthlyComponent } from '../price-monthly/price-monthly.component';
import { PriceCoPilotComponent } from '../price-co-pilot/price-co-pilot.component';
import { PriceBasicComponent } from '../price-basic/price-basic.component';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';

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
        HdNavbarModule,
        HdFooterModule,
        HubspotModule,
    RouterModule.forChild(routes),
  ],
})
export class PricingPageModule { }
