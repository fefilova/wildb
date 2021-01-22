import { Component, OnInit} from '@angular/core';
import { ProdService } from '../prod.service';
import IProduct from '../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private prodService: ProdService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.prodService.getProducts();
  }
}
