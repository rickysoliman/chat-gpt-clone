import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from './messages/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  messages: Message[] = [];

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.messages.push({ text: 'Message ' + i, owner: i % 2 === 0 ? 'User' : 'ChatGPT' });
    }
  }

  onSubmit(form: NgForm) {
    if (!form.value.userInput) {
      return;
    }
    this.messages.push({ text: form.value.userInput, owner: 'User' });
    form.resetForm();
  }
}
