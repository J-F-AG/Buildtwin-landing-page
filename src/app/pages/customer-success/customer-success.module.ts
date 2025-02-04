import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSuccessComponent } from './customer-success.component';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';


const routes: Routes = [
  {
    path: '',
    component: CustomerSuccessComponent,
  },
];

@NgModule({
  declarations: [
    CustomerSuccessComponent
  ],
  imports: [
    CommonModule,
    HdNavbarModule,
    HdFooterModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerSuccessModule { }
