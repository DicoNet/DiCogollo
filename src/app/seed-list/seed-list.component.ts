import { Component, OnInit } from '@angular/core';
import { SeedCartService } from '../seed-cart.service';
import { SeedCartComponent } from '../seed-cart/seed-cart.component';
import { Seed } from './seed';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.scss']
})
export class SeedListComponent implements OnInit {

  seeds : Seed [] = [
  {name: 'Girl Scout Cookies',
  price: 20,
  stock:5,
  image:'../assets/images/girl.jpg',
  quantity : 0
  },
  {name: 'White Whidow',
  price: 25,
  stock: 32,
  image:'../assets/images/white.jpg',
  quantity: 0
  },
  {name: 'Amnesia Haze',
  price: 20,
  stock: 54,
  image:'../assets/images/amnesia.jfif',
  quantity : 0
  },
  {name: 'OG Kush',
  price: 40,
  stock: 12,
  image:'../assets/images/og.jpg',
  quantity: 0
  },
  {name: 'Ak-47',
  price: 55,
  stock:40,
  image:'../assets/images/ak.jpg',
  quantity: 0
  },
  {name: 'Pineapple Kush',
  price: 15,
  stock:0,
  image:'../assets/images/pineapple.jfif',
  quantity: 0
  },
];

  constructor(private seedcart: SeedCartService) { 

  }

  ngOnInit(): void {
  }
  addToCart(seed) :void {
    this.seedcart.addToCart(seed);
    seed.stock -= seed.quantity;
    seed.quantity =0;

  }


}
