import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logcomp',
  templateUrl: './logcomp.component.html',
  styleUrls: ['./logcomp.component.css']
})
export class LogcompComponent implements OnInit {

  isDisplay: boolean;
  logs: string[];
  logContent: string;

  constructor() {
    // Nothing here
  }

  ngOnInit(): void {
    this.isDisplay = false;
    this.logContent = "";
    this.logs = new Array<string>();
  }

  getDisplay() {
    return this.isDisplay;
  }

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
    this.addLog();
  }

  addLog() {
    this.logContent = "This is " + (this.logs.length + 1) + "'s log : " + new Date();
    this.logs.push(this.logContent);
  }

  getLogFontColor() {
    return this.logs.length > 4;
  }

  getLogBackgroundColor() {
    return this.logs.length > 4 ? "blue" : "white";
  }

}
