import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activation: number;
  inactivation: number;

  constructor(private counterService: CounterService, private userService: UserService) {
    this.userService.activationEventEmitter.subscribe(() => {
      this.activation = this.counterService.activationCounter;
      this.inactivation = this.counterService.inactivationCounter;
    });
  }

  ngOnInit(): void {
    this.activation = this.counterService.activationCounter;
    this.inactivation = this.counterService.inactivationCounter;
  }
}
