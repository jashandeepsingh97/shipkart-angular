import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  num: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  async handleProductDetails() {
    //get the "id" param string.convert string to a number using "+" symbol

    const theProductId: number = +this.route.snapshot.paramMap.get('id');

    this.productService.getProductDetail(theProductId).subscribe((data) => {
      this.product = data;
      console.table(data);
    });
  }
}
