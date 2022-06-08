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
  injectTime: any = null;
  start: any = null;
  stop: any = null;
  selectedOdor: string = "";
  selectedStrength: number = 0;

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
    this.injectTime = null;
  }

  formatD(ms:number)								// format for decimal minutes
{
	var d = new Date(ms);
	var m = d.getMinutes();
  var s = d.getSeconds();
  var mx = d.getMilliseconds() / 1000;
  var ds = parseInt(((s + mx) / 60 * 100).toFixed(2)) * 100;
	var formatted = m.toString().padStart(2, "0")+"."+ds.toString().padStart(4, "0").substr(0,3);
	return formatted;
}
}
