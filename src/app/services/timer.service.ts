import { EventEmitter, Injectable } from '@angular/core';
import { States, oTemplate, Odors, Strengths, sTemplate } from '../_constants';
import { Event } from '../_event';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  timer: Date = new Date(0, 0, 0, 0, 0, 0, 0);
  t = 0;
  iTimer: any = null;
  buttonPress: number = 0;
  buttonText: string = 'Inject';
  injectTime: any = null;
  start: any = null;
  stop: any = null;
  selectedOdor: string = 'N/A';
  selectedStrength: string = 'N/A';
  valueFromO: boolean = true;
  duration: number = 0;

  readonly state = States;

  events: Event[] = [];

  /* Dummy data for testing
  events: Event[] = [
    {
      odor: 'Citrus',
      strength: 3,
      start: '00.042',
      end: '00.059',
      duration: '00.027',
    },
    {
      odor: 'Woody',
      strength: 2,
      start: '00.063',
      end: '00.069',
      duration: '00.006',
    },
    {
      odor: 'Fruity',
      strength: 4,
      start: '00.077',
      end: '00.090',
      duration: '00.013',
    },
  ];
*/

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
    this.buttonText = 'Inject';
    this.injectTime = null;
    this.events = [];
  }

  formatD(
    ms: number // format for decimal minutes
  ) {
    var d = new Date(ms);
    var m = d.getMinutes();
    var s = d.getSeconds();
    var mx = d.getMilliseconds() / 1000;
    var ds = parseInt((((s + mx) / 60) * 100).toFixed(2)) * 100;
    var formatted =
      m.toString().padStart(2, '0') +
      '.' +
      ds.toString().padStart(4, '0').substr(0, 3);
    return formatted;
  }

  pushEvent() {
    this.events.push({
      odor: this.selectedOdor,
      strength: this.selectedStrength,
      start: this.formatD(this.start - this.injectTime),
      end: this.formatD(this.stop - this.injectTime),
      duration: this.formatD(this.duration),
    });
  }
}
