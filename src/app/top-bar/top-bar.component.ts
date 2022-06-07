import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';


@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  constructor(public timerService: TimerService) {}



  onDownload() {}

  ngOnInit(): void {}
}
