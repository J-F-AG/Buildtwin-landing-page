import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdProvidersComponent } from './hd-providers.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HdProvidersComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    HdProvidersComponent
  ]
})
export class HdProvidersModule {
  static HdProvidersComponent() {
    return HdProvidersComponent
  }
 }
