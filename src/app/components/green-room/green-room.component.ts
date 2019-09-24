import { Component, OnInit } from "@angular/core";
// import { ClassGetter } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-green-room",
  templateUrl: "./green-room.component.html",
  styleUrls: ["./green-room.component.scss"]
})
export class GreenRoomComponent implements OnInit {
  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: "dd-MM-yyyy",
    defaultOpen: true,
    closeOnSelect: false
  };
  dateTime: Date = new Date();

  onDateSelect(e) {
    console.log(e);
    this.dateTime = e;
    console.log(this.date);
  }

  constructor() {}

  ngOnInit() {}
}
