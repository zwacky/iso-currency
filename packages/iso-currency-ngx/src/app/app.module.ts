import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IsoCurrencyModule } from 'iso-currency';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IsoCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
