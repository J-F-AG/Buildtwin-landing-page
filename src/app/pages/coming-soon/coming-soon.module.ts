import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ComingSoonComponent } from './coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonComponent,
  },
];

@NgModule({
  declarations: [
    ComingSoonComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class ComingSoonModule { }
