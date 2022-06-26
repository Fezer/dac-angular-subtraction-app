import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubtracaoModule } from './subtracao';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubtracaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
