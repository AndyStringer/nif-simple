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
  injectDate: any = null;
  start: any = null;
  stop: any = null;

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
    this.injectDate = null;
  }

  formatD(ms:number)								// format for decimal minutes
{
	var d = new Date(ms);
	var m = d.getMinutes();
  var s = d.getSeconds();
  var ms = d.getMilliseconds();
  // var t = (s + (ms/1000)/60*100).toFixed(2);
  var t = (ms/1000/60*100).toFixed(2);
  var ds = parseInt(t)*100;

//  return ds.toString();

//	var ds= parseInt(((d.getSeconds()+d.getMilliseconds()/1000)/60*100).toFixed(2)*100);
	var formatted = m.toString().padStart(2, "0")+"."+ds.toString().padStart(4, "0").substr(0,3);
	return formatted;
}
}
