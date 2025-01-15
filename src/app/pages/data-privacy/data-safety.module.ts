import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataPrivacyComponent } from './data-safety.component';

const routes: Routes = [
  {
    path: '',
    component: DataPrivacyComponent,
  },
];

@NgModule({
  declarations: [
    DataPrivacyComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class DataPrivacyModule { }
