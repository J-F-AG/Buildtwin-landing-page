import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DataSafetyComponent } from './data-safety.component';

const routes: Routes = [
  {
    path: '',
    component: DataSafetyComponent,
  },
];

@NgModule({
  declarations: [
    DataSafetyComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class DataSafetyModule { }
