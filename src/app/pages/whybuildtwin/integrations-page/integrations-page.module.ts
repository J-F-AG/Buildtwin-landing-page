import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { IntegrationsPageComponent } from './integrations-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntegrationsPageComponent,
  },
];

@NgModule({
  declarations: [
    IntegrationsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class IntegrationsPageModule { }
