import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shipkart-angular';
  menu = false;
  navbarOpen = false;
  search: String = '';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggle() {
    this.menu = !this.menu;
  }
  ngOnInit(): void {}
}
