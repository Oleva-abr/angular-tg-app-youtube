import { Component } from '@angular/core';
import { IProduct, ProductService } from '../../services/products.service';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `<div class="centred">
    <h2 class="mb"> {{product.title}}</h2>
    <br/>
    <img [src]="product.image" [alt]="product.title">
    <p>{{product.text}}</p>
    <p>{{product.time}}</p>
    <a [href]="product.link" target="_blank">Learn about the course</a>
  </div>`,
})
export class ProductComponent {
  product: IProduct;

  constructor(
    private products: ProductService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get("id")
    this.product = this.products.getById(id)
  }
}
