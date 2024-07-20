import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './component/svg-icon/svg-icon.component';
import { SvgDefinationComponent } from './component/svg-defination/svg-defination.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [
    SvgIconComponent,
    SvgDefinationComponent
  ],
  imports: [
    CommonModule,
    NzToolTipModule

  ],
  exports: [
    SvgIconComponent,
    SvgDefinationComponent,
  ]
})
export class BtIconModule { }
