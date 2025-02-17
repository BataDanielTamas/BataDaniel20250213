import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.products;
    });
  }
}