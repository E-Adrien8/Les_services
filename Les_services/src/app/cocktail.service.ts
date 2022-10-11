import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  
  constructor() { }
cocktails: Cocktail[] = [
  {
    name: 'Mojito',
    price: 12,
    image: 'https://havana-club.com/wp-content/uploads/2020/10/01_HC3_MOJITO_0228_BASE.png'
  },
  {
    name: 'Moscow mule',
    price: 13,
    image: 'https://www.thomas-henry.com/wp-content/uploads//2010/08/website-th2020-moods-moscowmule-09-1024x1024.jpg'
  },
  {
    name: 'Cognac sour',
    price: 14,
    image: 'https://fr.inshaker.com/uploads/cocktail/hires/804/icon_1556113884-Secret-Sour__highres.jpg'
  },
  {
    name: 'Low coco',
    price: 15,
    image: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Low-Coco_vitamix_1ou2cocktails_IMG_9757.jpg'
  }

]
  getCocktails(): Cocktail[] {
return this.cocktails;
  }
}
