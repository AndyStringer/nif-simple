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
  displayModal: boolean = true;


  constructor(private timerService: TimerService) {
    this.odors = Odors;
  }

  getOdor(event: any, element: { hide: (arg0: any) => void; }) {
    this.timerService.selectedOdor = this.odor;
    this.timerService.events[this.timerService.events.length - 1].odor = this.odor;
    element.hide(event);
    console.log(this.odor.valueOf());
  }

  getOdorD() {
    this.timerService.selectedOdor = JSON.stringify(this.odor).substring(9, JSON.stringify(this.odor).length - 2); // nasty hack to get around issue with PrimeNG returning incorrect data
//    this.timerService.events[this.timerService.events.length - 1].odor =  this.timerService.selectedOdor;
    this.displayModal = false;
    this.timerService.strengthPanelVisible = true;
    console.log( this.timerService.selectedOdor );
  }

  showModalDialog() {
    this.displayModal = true;
  }


  ngOnInit(): void {

  }
  

}
