import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  template: `<h1>shop</h1>`,
})
export class ShopComponent {
  telegram = inject(TelegramService)
  constructor() {

    this.telegram.MainButton.show()
  }
}
