angular
	.module('demo', ['iso-currency-ng1'])

	.controller('AppCtrl', function() {
		const vm = this;

		vm.amount = 15.23;
		vm.currencies = ['EUR', 'USD', 'JPY', 'OMR', 'GMD'];
	});
