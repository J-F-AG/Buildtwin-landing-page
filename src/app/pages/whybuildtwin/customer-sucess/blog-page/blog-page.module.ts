import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { BlogPageComponent } from './blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
  },
];

@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class BlogPageModule { }
