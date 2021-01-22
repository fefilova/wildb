import { Injectable } from '@angular/core';
import IProduct from './models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor() { }

  items: IProduct[] = [
    { src: "/assets/1.jpg", title: '1 787 ₽', text: 'FineCase / Блок питания' },
    { src: "/assets/2.jpg", title: '250 ₽', text: 'MRM-POWER / Блок питания' },
    { src: "/assets/3.jpg", title: '428 ₽', text: 'Zornwee / Блок питания' },
    { src: "/assets/4.jpg", title: '3 397 ₽', text: 'URM / Герметичный блок питания' },
    { src: "/assets/5.jpg", title: '1 190 ₽', text: 'PITATEL / Блок питания' },
  ];

  getProducts(): IProduct[] {
    return this.items;
  }

}
