import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  cartOpen: boolean = false;

  constructor() {}

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

  ngOnInit(): void {}
}
