import { Component } from "@angular/core";
import { Hero } from "./components/hero/hero";

@Component({
  selector: "app-home",
  imports: [Hero],
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
})
export class Home { }
