import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BimTrustByNewComponent } from './trust-by.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    BimTrustByNewComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    BimTrustByNewComponent
  ]
})
export class TrustByModule { }
