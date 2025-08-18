import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdFooterComponent } from './hd-footer.component';
import { RouterModule } from '@angular/router';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';

@NgModule({
  declarations: [
    HdFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HubspotModule
  ],
  exports: [
    HdFooterComponent
  ]
})
export class HdFooterModule { }
