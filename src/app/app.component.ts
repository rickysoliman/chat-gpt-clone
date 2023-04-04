import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from './messages/message.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  messages: Message[] = [];

  constructor(private messagesService: MessagesService) {}

  onSubmit(form: NgForm) {
    if (!form.value.userInput) {
      return;
    }
    const message = form.value.userInput;
    console.log('onSubmit', message);
    form.resetForm();

    this.messages.push({ text: message, owner: 'User' });

    this.messagesService.sendMessage(message)
      .subscribe((response: any) => {
        console.log(response);
        this.messages.push({ text: response.choices[0].message.content, owner: 'ChatGPT' });
      }, error => {
        console.error(error);
        this.messages.push({ text: `I'm sorry, I didn't understand that message. Can you please try again?`, owner: 'ChatGPT' });
      });
  }
}
