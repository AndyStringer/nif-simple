import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import {
  States,
  oTemplate,
  Odors,
  Strengths,
  sTemplate,
  EXCEL_EXTENSION,
  EXCEL_TYPE,
  PDF_EXTENSION,
} from '../../_constants';

@Component({
  selector: 'strengths-popup',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent implements OnInit {

  strengths: sTemplate[] = [];
  strength: string = "";
  displayModal = false;

  constructor(private timerService: TimerService) {
    this.strengths = Strengths;
  }

  getStrength(event: any, element: { hide: (arg0: any) => void; }) {
    this.timerService.selectedOdor = this.strength;
    element.hide(event);
    console.log(this.strength)
  }

  getStrengthD() {
    this.timerService.selectedStrength = JSON.stringify(this.strength).substring(9, JSON.stringify(this.strength).length - 2); // nasty hack to get around issue with PrimeNG returning incorrect data
    this.displayModal = false;
    this.timerService.pushEvent();
  }

  ngOnInit(): void {
  }

}
