import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { SeedCartService } from '../seed-cart.service';
import { Seed } from '../seed-list/seed';

@Component({
  selector: 'app-seed-cart',
  templateUrl: './seed-cart.component.html',
  styleUrls: ['./seed-cart.component.scss']
})
export class SeedCartComponent implements OnInit {

  cartList$ : Observable<Seed[]>;

  constructor(private seedcart: SeedCartService) { 
    this.cartList$ = seedcart.cartList.asObservable();

  }

  ngOnInit(): void {
  }

}
