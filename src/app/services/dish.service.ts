import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Dishes } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return Dishes;
  }

}
