import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: "app-green-room",
  templateUrl: "./green-room.component.html",
  styleUrls: ["./green-room.component.scss"]
})
export class GreenRoomComponent implements OnInit {
  form: FormGroup;
  employeesNames = [];
  timeStarts = [];
  timeEnds = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      employeeName: [""],
      timeStart: [""],
      timeEnd: [""]
    });
    this.employeesNames = this.getemployeeName();
    console.log(this.employeesNames);

    this.timeStarts = this.gettimeStart();
    console.log(this.gettimeStart);

    this.timeEnds = this.gettimeEnd();
    console.log(this.gettimeEnd);
  }

  getemployeeName() {
    return [
      { id: "1", name: "Scott" },
      { id: "2", name: "Duncan" },
      { id: "3", name: "Hayely" },
      { id: "4", name: "Kasim" },
      { id: "5", name: "Carl" },
      { id: "6", name: "Sam" }
    ];
  }

  gettimeStart() {
    return [
      { id: "1", timeStart: "9:00" },
      { id: "2", timeStart: "9:30" },
      { id: "3", timeStart: "10:00" },
      { id: "4", timeStart: "10:30" },
      { id: "5", timeStart: "11:00" },
      { id: "7", timeStart: "11:30" },
      { id: "8", timeStart: "12:00" },
      { id: "9", timeStart: "12:30" },
      { id: "10", timeStart: "1:00" },
      { id: "11", timeStart: "1:30" },
      { id: "12", timeStart: "2:00" },
      { id: "13", timeStart: "2:30" },
      { id: "14", timeStart: "3:00" },
      { id: "15", timeStart: "3:30" },
      { id: "16", timeStart: "4:00" },
      { id: "17", timeStart: "4:30" },
      { id: "18", timeStart: "5:00" },
      { id: "19", timeStart: "5:30" }
    ];
  }

  gettimeEnd() {
    return [
      { id: "1", timeEnd: "9:00" },
      { id: "2", timeEnd: "9:30" },
      { id: "3", timeEnd: "10:00" },
      { id: "4", timeEnd: "10:30" },
      { id: "5", timeEnd: "11:00" },
      { id: "7", timeEnd: "11:30" },
      { id: "8", timeEnd: "12:00" },
      { id: "9", timeEnd: "12:30" },
      { id: "10", timeEnd: "1:00" },
      { id: "11", timeEnd: "1:30" },
      { id: "12", timeEnd: "2:00" },
      { id: "13", timeEnd: "2:30" },
      { id: "14", timeEnd: "3:00" },
      { id: "15", timeEnd: "3:30" },
      { id: "16", timeEnd: "4:00" },
      { id: "17", timeEnd: "4:30" },
      { id: "18", timeEnd: "5:00" },
      { id: "19", timeEnd: "5:30" }
    ];
  }

  ngOnInit() {}
}
