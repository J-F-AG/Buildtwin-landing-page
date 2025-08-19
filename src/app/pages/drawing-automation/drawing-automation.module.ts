import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DrawingAutomationComponent } from './drawing-automation.component';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';

const routes: Routes = [
  { path: '', component: DrawingAutomationComponent }
];

@NgModule({
  declarations: [DrawingAutomationComponent],
  imports: [
    CommonModule,
    HdNavbarModule,
    HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class DrawingAutomationModule {}


