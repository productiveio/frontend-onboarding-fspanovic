import Model, {attr} from '@ember-data/model';

import type Currency from 'frontend-onboarding-template/consts/currency';


export default class ServiceModel extends Model {
  @attr('string') name?: string;

  @attr('string') currency?: Currency;
  @attr('string') currencyDefault?: Currency;
  @attr('string') currencyNormalized?: Currency;

  @attr('number') price?: number;
  @attr('number') priceDefault?: number;
  @attr('number') priceNormalized?: number;
  @attr('number') revenue?: number;
  @attr('number') revenueDefault?: number;
  @attr('number') revenueNormalized?: number;
  @attr('number') projectedRevenue?: number;
  @attr('number') projectedRevenueDefault?: number;
  @attr('number') projectedRevenueNormalized?: number;
  @attr('number') cost?: number;
  @attr('number') costDefault?: number;
  @attr('number') costNormalized?: number;
  @attr('number') profit?: number;
  @attr('number') profitDefault?: number;
  @attr('number') profitNormalized?: number;
  @attr('number') budgetUsed?: number;
  @attr('number') budgetUsedDefault?: number;
  @attr('number') budgetUsedNormalized?: number;
  @attr('number') budgetTotal?: number;
  @attr('number') budgetTotalDefault?: number;
  @attr('number') budgetTotalNormalized?: number;
  @attr('number') discountAmount?: number;
  @attr('number') discountAmountDefault?: number;
  @attr('number') discountAmountNormalized?: number;
  @attr('number') markupAmount?: number;
  @attr('number') markupAmountDefault?: number;
  @attr('number') markupAmountNormalized?: number;
  @attr('number') initialServiceId?: number;
}
