import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
  <app-product-list
  title="Angular"
  subtitle="components, services, routing"
  [products]="products.byGroup['skill']"
  />
  <app-product-list
  title="React"
  subtitle="components, hooks, context"
  [products]="products.byGroup['intensive']"
  />
  <app-product-list
  title="Vue"
  subtitle="components, directives, transitions"
  [products]="products.byGroup['course']"
  />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService)
  products = inject(ProductService)
  constructor() {
    this.telegram.BackButton.hide();
  }
}
