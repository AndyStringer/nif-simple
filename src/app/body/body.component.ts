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
  Events: Event[] = [];

  injectDate: any = null;

  readonly state = States;

  constructor(public timerService: TimerService) {}

  onPress() {
    switch (this.timerService.buttonPress) {
      case this.state.inject:
        this.timerService.startTimer();
        this.timerService.buttonText = 'Start';
        this.timerService.buttonPress = this.state.start;
        this.injectDate = new Date();
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
