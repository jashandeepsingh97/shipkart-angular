import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  menu = false;

  toggle() {
    this.menu = !this.menu;
  }
  ngOnInit(): void {}
}
