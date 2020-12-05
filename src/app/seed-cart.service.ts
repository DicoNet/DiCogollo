import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Seed } from './seed-list/seed';

@Injectable({
  providedIn: 'root'
})
export class SeedCartService {

  private _cartList: Seed[] = [];
cartList: BehaviorSubject<Seed[]> = new BehaviorSubject([]);



constructor() { }



  addToCart(seed: Seed){
  let item : Seed = this._cartList.find((v1) => v1.name == seed.name);
   if(!item){
    this._cartList.push({ ... seed});
   } else{
     item.quantity += seed.quantity;
   }
  
  console.log(this._cartList);
  this.cartList.next(this._cartList); //equivale a emitt de eventos
 
  }


}
