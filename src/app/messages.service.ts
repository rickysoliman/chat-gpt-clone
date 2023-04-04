import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OPENAI_API_KEY } from '../../openai-api-key';

@Injectable()
export class MessagesService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = OPENAI_API_KEY; // TODO: figure out how to access from .env file

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    console.log(message);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      })
    };

    const body = {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": message}],
      "temperature": 0.7
    };

    return this.http.post(this.apiUrl, body, httpOptions);
  }
}
