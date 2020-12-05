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
  image:'https://scontent.faep1-1.fna.fbcdn.net/v/t1.0-9/129780562_3573690399383741_2429493423061390689_n.jpg?_nc_cat=100&ccb=2&_nc_sid=b9115d&_nc_ohc=Kpr-WxDBPAMAX80jWkw&_nc_ht=scontent.faep1-1.fna&oh=d1c088eca29868243fd76866126b9b7c&oe=5FF12FE1',
  quantity : 0
  },
  {name: 'White Whidow',
  price: 25,
  stock: 32,
  image:'https://scontent.faep1-1.fna.fbcdn.net/v/t1.0-9/129780560_3573690542717060_2625087737938436621_n.jpg?_nc_cat=102&ccb=2&_nc_sid=b9115d&_nc_ohc=rXAOg9UQ03sAX85hsTO&_nc_oc=AQktXr5GiHN31R1AqnP99Dz0dpDLy3Y9P1hT4ppNPldSckikwUP6AVD2JkMgiCKR_vE&_nc_ht=scontent.faep1-1.fna&oh=74a3108e3690fc6422f3ecb210ecd9d8&oe=5FF20BAF',
  quantity: 0
  },
  {name: 'Amnesia Haze',
  price: 20,
  stock: 54,
  image:'https://scontent.faep1-1.fna.fbcdn.net/v/t1.0-9/129708873_3573690302717084_8942913961666998077_n.jpg?_nc_cat=108&ccb=2&_nc_sid=b9115d&_nc_ohc=LcwhcFUpwT8AX_56425&_nc_ht=scontent.faep1-1.fna&oh=0663f0a36f1a1fa46e0f8da60244faee&oe=5FF00549',
  quantity : 0
  },
  {name: 'OG Kush',
  price: 40,
  stock: 12,
  image:'https://scontent.faep1-1.fna.fbcdn.net/v/t1.0-9/130090260_3573690479383733_2603111194895650079_o.jpg?_nc_cat=108&ccb=2&_nc_sid=b9115d&_nc_ohc=DLIQNZYJ5mkAX_2MGOW&_nc_ht=scontent.faep1-1.fna&oh=33e4ea261a95733202d3e7da635d8f35&oe=5FF27457',
  quantity: 0
  },
  {name: 'Ak-47',
  price: 55,
  stock:40,
  image:'https://scontent.faep1-1.fna.fbcdn.net/v/t1.0-9/129893902_3573690352717079_6264180215553381506_n.jpg?_nc_cat=104&ccb=2&_nc_sid=b9115d&_nc_ohc=Tt2HhaEGQfgAX96sOaI&_nc_ht=scontent.faep1-1.fna&oh=0f7aab7720476fd8a132463f61b5d60a&oe=5FF17DC7',
  quantity: 0
  },
  {name: 'Pineapple Kush',
  price: 15,
  stock:0,
  image:'https://scontent.faep1-1.fna.fbcdn.net/v/t1.0-9/130143396_3573690472717067_5167082867574393609_n.jpg?_nc_cat=103&ccb=2&_nc_sid=b9115d&_nc_ohc=9c6yKIIEzikAX8yjBXx&_nc_ht=scontent.faep1-1.fna&oh=1f870a53b428b40bedcbd728d9081192&oe=5FF06E26',
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
