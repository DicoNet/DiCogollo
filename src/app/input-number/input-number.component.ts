import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
@Input()
quantity : number;

@Input()
max: number;

@Output()
quantityChange: EventEmitter<number> = new EventEmitter<number>();



  ngOnInit(): void {
  }
  DownQuantity() : void {
    if(this.quantity>0){
  this.quantity--;
  }
  this.quantityChange.emit(this.quantity);
  }
  UpQuantity() : void {
    if (this.quantity<this.max){
    this.quantity++;
    
  }
  this.quantityChange.emit(this.quantity);
    }
  // onChangeQuantity(event, seed: Seed) : void{


  // }


}
