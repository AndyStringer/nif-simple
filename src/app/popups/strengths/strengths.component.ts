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

  constructor(private timerService: TimerService) {
    this.strengths = Strengths;
  }

  getStrength(event: any, element: { hide: (arg0: any) => void; }) {
    this.timerService.selectedOdor = this.strength;
    element.hide(event);
    console.log(this.strength)
  }


  ngOnInit(): void {
  }

}
