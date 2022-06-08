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
  selector: 'odors-popup',
  templateUrl: './odors.component.html',
  styleUrls: ['./odors.component.scss']
})
export class OdorsComponent implements OnInit {

  odors: oTemplate[] = [];
  odor: string = "";

  constructor(private timerService: TimerService) {
    this.odors = Odors;
  }

  getOdor(event: any, element: { hide: (arg0: any) => void; }) {
    this.timerService.selectedOdor = this.odor;
    element.hide(event);
    console.log(this.odor)
  }

  ngOnInit(): void {
  }

}
