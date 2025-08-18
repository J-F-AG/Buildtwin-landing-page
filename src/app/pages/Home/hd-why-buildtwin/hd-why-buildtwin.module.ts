import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdWhyBuildtwinComponent } from './hd-why-buildtwin.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HdWhyBuildtwinComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    HdWhyBuildtwinComponent
  ]
})
export class HdWhyBuildtwinModule {
  static HdWhyBuildtwinComponent() {
    return HdWhyBuildtwinComponent
  }
}
