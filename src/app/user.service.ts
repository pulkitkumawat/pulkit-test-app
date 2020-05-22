import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(user: string) {
    return this.http.get<{ messages: []; outputMessage: string }>(
      "https://jsonplaceholder.typicode.com/users?name=" + user
    );
  }

  getPostsById(userID: string) {
    return this.http.get<{ messages: []; outputMessage: string }>(
      "https://jsonplaceholder.typicode.com/posts?userId=" + userID
    );
  }
}
