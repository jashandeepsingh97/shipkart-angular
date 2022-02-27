import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  doSearch(value: string) {
    this.router.navigateByUrl(`/search/${value}`);
  }
}
