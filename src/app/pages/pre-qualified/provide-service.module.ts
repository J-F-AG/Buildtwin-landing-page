import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreQualifiedComponent } from './provide-service.component';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

const routes: Routes = [
  {
    path: '',
    component: PreQualifiedComponent,
  },
];

@NgModule({
  declarations: [
    PreQualifiedComponent,
  ],
  imports: [
    CommonModule,
    HdNavbarModule,
    HdFooterModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class PreQualifiedModule { }
