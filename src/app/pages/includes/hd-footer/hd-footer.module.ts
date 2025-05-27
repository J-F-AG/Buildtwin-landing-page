import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdFooterComponent } from './hd-footer.component';
import { RouterModule } from '@angular/router';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HdFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HubspotModule,
    HttpClientModule
  ],
  exports: [
    HdFooterComponent
  ]
})
export class HdFooterModule { 
  static HdFooterComponent(){
    return HdFooterComponent;
  }
}
