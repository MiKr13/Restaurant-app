import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion.model';
import { Promotions } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return Promise.resolve(Promotions);
  }
  getPromotion(id: number): Promise<Promotion> {
    return Promise.resolve(Promotions.filter((promo) => (promo.id === id))[0]);
    // as filter gives an array but we need element from that array so used 0 and arrow function
  }

  getFeaturedPromotion(): Promise<Promotion> {
    // normal function also
    return Promise.resolve(Promotions.filter(function (promo) {
      return promo.featured;
    })[0]);
  }

}
