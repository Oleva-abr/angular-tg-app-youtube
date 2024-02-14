import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  styles: `
 .form{
  height: 70vh;
  justify-content:center;
 }
 `,
  template: `
  <form  class="centred form">
    <h2 class="mb">Feedback</h2>

    <textarea class="form-control" [value]="feedback()" (input)="handleChange($event)"></textarea>
  </form>
  `,
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(
    private telegram: TelegramService
  ) {
    this.sendData = this.sendData.bind(this)
  }
  ngOnInit(): void {
    this.telegram.MainButton.setText('Send message');
    // this.telegram.MainButton.show();
    // this.telegram.MainButton.disable();
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }

  sendData() {
    this.telegram.sendData({ feedback: this.feedback })
    if (this.feedback().trim) {
      this.telegram.MainButton.show()
    } else {
      this.telegram.MainButton.hide()
    }
  }

  handleChange(event) {
    this.feedback.set(event.target.value)
  }

  ngOnDestroy(): void {
    this.telegram.MainButton.offClick(this.sendData)
  }


}
