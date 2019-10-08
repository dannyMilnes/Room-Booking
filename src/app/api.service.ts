import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_KEY = "7373483bad8c41d48d4cdf366cd1263a";
  constructor(private httpClient: HttpClient) {}
  public getBookings() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
    );
  }
}
