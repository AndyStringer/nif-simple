import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Date = new Date(0, 0, 0, 0, 0, 0, 0);
  t = 0;
  iTimer: any = null;
  buttonPress: number = 0;
  buttonText: string = "Inject";

  constructor() {}

  startTimer() {
    this.iTimer = setInterval(() => {
      this.timer = new Date(0, 0, 0, 0, 0, this.t++, 0);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.iTimer);
  }

  resetTimer() {
    this.t = 0;
    clearInterval(this.iTimer);
    this.iTimer = 0;
    this.timer = new Date(0, 0, 0, 0, 0, 0, 0);
    this.buttonPress = 0;
    this.buttonText = "Inject";
  }
}
