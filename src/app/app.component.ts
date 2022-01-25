import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shipkart-angular';

  navbarOpen = false;
  search: String = '';
  cartOpen = false;
  isOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleCart() {
    console.log(this.cartOpen);
    this.cartOpen = !this.cartOpen;
  }

  toggleNavbar2() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
