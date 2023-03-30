import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  userInput = '';

  onSubmit(form: NgForm) {
    this.userInput = form.value.userInput;
    console.log(this.userInput);
  }
}
