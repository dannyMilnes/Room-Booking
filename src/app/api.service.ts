import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public getBookings() {
    return this.httpClient.get(`http://localhost:3000/posts`);
  }
}

// https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7373483bad8c41d48d4cdf366cd1263a
