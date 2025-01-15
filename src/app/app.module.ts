import { NgModule } from '@angular/core';
import { BrowserModule, Title, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtIconModule } from 'projects/bt-icon/bt-icon.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [    
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    BtIconModule,
    NgxScrollTopModule,
    HttpClientModule
  ],
  providers: [
    Title,
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideClientHydration(),
    // { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }