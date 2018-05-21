import { getCurrencyByCode } from 'iso-4217-currency-codes';

export class IsoCurrencyFilter {
	static $inject = ['$filter'];

	constructor($filter: ng.IFilterService) {

		/**
		 * Usage:
		 * {{ AMOUNT | isoCurrency:CURRENCYCODE:FRACTION }}
		 */
		return (amount: number, currencyCode: string, fraction: number): string => {
			const currency = getCurrencyByCode(currencyCode);
			const fractionSize = (fraction === void 0) ?
				currency.fraction :
				fraction;
				return $filter<ng.IFilterCurrency>('currency')(amount, (currency.symbol || currencyCode) + ' ', fractionSize);
		};
	}
}
