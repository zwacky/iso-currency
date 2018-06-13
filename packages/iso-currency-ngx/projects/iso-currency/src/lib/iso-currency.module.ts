import { NgModule } from '@angular/core';
import { IsoCurrencyPipe } from './iso-currency.pipe';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  imports: [
  ],
  declarations: [IsoCurrencyPipe],
  exports: [IsoCurrencyPipe],
  providers: [CurrencyPipe]
})
export class IsoCurrencyModule { }
