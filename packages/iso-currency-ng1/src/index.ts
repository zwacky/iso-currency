import * as angular from 'angular';
import { IsoCurrencyFilter } from './iso-currency.filter';

angular
    .module('iso-currency-ng1', [])
    .filter('isoCurrency', IsoCurrencyFilter);
