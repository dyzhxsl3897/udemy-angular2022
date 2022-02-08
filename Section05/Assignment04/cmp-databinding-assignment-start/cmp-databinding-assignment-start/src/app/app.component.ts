import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public counter: number;

  ngOnInit(): void {
    this.counter = 0;
  }

  updateCounter(data: { counter: number }) {
    this.counter = data.counter;
  }

  getOddCounter() {
    return Math.floor((this.counter + 1) / 2);
  }

  getEvenCounter() {
    return Math.floor((this.counter) / 2);
  }

}
