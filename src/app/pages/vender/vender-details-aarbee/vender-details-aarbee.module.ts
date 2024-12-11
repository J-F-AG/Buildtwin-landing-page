import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { VenderDetailsAarbeeComponent } from './vender-details-aarbee.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: VenderDetailsAarbeeComponent,
  },
];

@NgModule({
  declarations: [
    VenderDetailsAarbeeComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class VenderDetailsAarbeeModule { }
