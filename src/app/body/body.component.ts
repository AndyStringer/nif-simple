import { Component, OnInit } from '@angular/core';
import { Event } from '../_event';
import { TimerService } from '../services/timer.service';
import { States } from '../_constants';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  events: Event[] = [
    { odor: 'Citrus', strength: 3, start: '00.042', end: '00.059' },
    { odor: 'Woody', strength: 2, start: '00.063', end: '00.069' },
    { odor: 'Fruity', strength: 4, start: '00.077', end: '00.090' },
  ];

  readonly state = States;

  constructor(public timerService: TimerService) {}

  onPress() {
    switch (this.timerService.buttonPress) {
      case this.state.inject:
        this.timerService.startTimer();
        this.timerService.buttonText = 'Start';
        this.timerService.buttonPress = this.state.start;
        this.timerService.injectDate = new Date();
        break;
      case this.state.start:
        this.timerService.buttonText = 'Stop';
        this.timerService.buttonPress = this.state.stop;
        break;
      case this.state.stop:
        this.timerService.buttonText = 'Start';
        this.timerService.buttonPress = this.state.start;
        break;
    }
  }

  ngOnInit(): void {}
}
