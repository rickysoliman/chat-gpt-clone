import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessagesService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = process.env['OPENAI_API_KEY'];

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
