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

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      employeeName: [""]
    });
    this.employeesNames = this.getemployeeName();
    console.log(this.employeesNames);
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

  ngOnInit() {}
}
