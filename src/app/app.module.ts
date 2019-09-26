import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { RouterModule, Routes } from "@angular/router";
import { BookingsComponent } from "./components/bookings/bookings.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { BoardRoomComponent } from "./components/board-room/board-room.component";
import { GreenRoomComponent } from "./components/green-room/green-room.component";
import { TheCaveComponent } from "./components/the-cave/the-cave.component";
import { AngularDateTimePickerModule } from "angular2-datetimepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "bookings", component: BookingsComponent },
  { path: "board-room", component: BoardRoomComponent },
  { path: "green-room", component: GreenRoomComponent },
  { path: "the-cave", component: TheCaveComponent },
  { path: "rooms", component: RoomsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingsComponent,
    PageNotFoundComponent,
    RoomsComponent,
    BoardRoomComponent,
    GreenRoomComponent,
    TheCaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDateTimePickerModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
