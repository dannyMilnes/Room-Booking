import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.component.html",
  styleUrls: ["./bookings.component.scss"]
})
export class BookingsComponent implements OnInit {
  bookings: object = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBookings().subscribe(data => {
      console.log(data);
      this.bookings = data;
      console.log(this.bookings);
    });
  }
}
