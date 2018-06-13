import { Pipe, PipeTransform } from '@angular/core';
import { getCurrencyByCode } from 'iso-4217-currency-codes';
import { CurrencyPipe } from '@angular/common';

@Pipe({name: 'isoCurrency'})
export class IsoCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {

  }

  /**
   * Usage:
   * {{ AMOUNT | isoCurrency:CURRENCYCODE:FRACTION }}
   */
  transform(amount: any, currencyCode: string, fraction: number): string {
    const currency = getCurrencyByCode(currencyCode);
    const fractionSize = (fraction === void 0) ?
      currency.fraction :
      fraction;
    return this.currencyPipe.transform(amount, null, (currency.symbol || currencyCode) + ' ', `1.${fractionSize}-${fractionSize}`);
  }

}
