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

  isOpen: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbar2() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
