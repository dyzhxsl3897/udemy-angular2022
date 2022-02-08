import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private counter: number;
  private isStarted: boolean;
  private ref: NodeJS.Timeout;

  @Output() counterIncreased = new EventEmitter<{ counter: number }>();

  constructor() { }

  ngOnInit(): void {
    this.counter = 0;
    this.isStarted = false;
  }

  startGame() {
    if (this.isStarted) {
      return;
    }

    this.ref = setInterval(() => {
      this.counter++;
      this.counterIncreased.emit({
        counter: this.counter
      });
    }, 1000);
    this.isStarted = true;
  }

  stopGame() {
    if (!this.isStarted) {
      return;
    }

    clearInterval(this.ref);
    this.isStarted = false;
  }

}
