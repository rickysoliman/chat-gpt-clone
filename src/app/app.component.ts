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

  onSubmit(form: NgForm) {
    this.messages.push({ text: form.value.userInput, owner: 'User' });
    form.resetForm();
  }
}
