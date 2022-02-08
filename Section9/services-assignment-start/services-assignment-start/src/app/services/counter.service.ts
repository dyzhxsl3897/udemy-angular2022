import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CounterService {
    activationCounter = 0;
    inactivationCounter = 0;

    activate() {
        this.activationCounter++;
    }

    inactivate() {
        this.inactivationCounter++;
    }
}