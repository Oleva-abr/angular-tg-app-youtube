import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>shop</h1>`,
})
export class ShopComponent {
  telegram = inject(TelegramService)
  products = inject(ProductService)
  constructor() {

    this.telegram.MainButton.show()
    console.log(this.products.byGroup)
  }
}
