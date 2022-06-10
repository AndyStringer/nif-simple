import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { TimerService } from '../services/timer.service';
import {
  States,
  oTemplate,
  Odors,
  Strengths,
  sTemplate,
  EXCEL_EXTENSION,
  EXCEL_TYPE,
  PDF_EXTENSION
} from '../_constants';
import { formatDate } from '@angular/common';
import { Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
    
  readonly state = States;
  exportColumns: any[] = [];
  cols: any[] = [];
  now = new Date();
  fileName: string = '';
  odorPanelVisible: boolean = false;
  strengthPanelVisible: boolean = false;
  odors: oTemplate[] = [];
  odor: string = "";
  strengths: sTemplate[] = [];
  strength: string = "";


  constructor(
    @Inject(LOCALE_ID) public localID: string,
    private primengConfig: PrimeNGConfig,
    public timerService: TimerService
    ) {
      this.strengths = Strengths;
      this.odors = Odors;
      }

  onPress() {
    this.odorPanelVisible = false;
    this.strengthPanelVisible = false;
    switch (this.timerService.buttonPress) {
      case this.state.inject:
        this.timerService.startTimer();
        this.timerService.buttonText = 'Start';
        this.timerService.buttonPress = this.state.start;
        this.timerService.injectTime = new Date().getTime();
        break;
      case this.state.start:
        this.timerService.start = new Date().getTime();
        this.timerService.buttonText = 'Stop';
        this.timerService.buttonPress = this.state.stop;
        this.timerService.duration = 0;
        break;
      case this.state.stop:
        this.timerService.stop = new Date().getTime();
        this.odorPanelVisible = true;
        this.timerService.buttonText = 'Start';
        this.timerService.buttonPress = this.state.start;
        this.timerService.duration = this.timerService.stop - this.timerService.start;
        break;
    }
  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p');
        doc.text("GCO Anaysis taken on " + formatDate(this.timerService.injectTime, 'EEEE, MMMM d, y, HH:mm:ss zzzz', this.localID), 105, 10, {align: 'center'});
        (doc as any).autoTable(this.exportColumns, this.timerService.events);
        doc.save(this.fileName + PDF_EXTENSION);
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.timerService.events);
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, 'data');
      xlsx.writeFile(workbook, this.fileName + EXCEL_EXTENSION);
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.cols = [
      { field: 'odor', header: 'Odor' },
      { field: 'strength', header: 'Strength' },
      { field: 'start', header: 'Start' },
      { field: 'end', header: 'End' },
      { field: 'duration', header: 'Duration' },
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
    this.fileName =
      'GCO_Events_' +
      formatDate(this.now, 'yyyy-MM-dd_HH-mm-ss', this.localID) +
      '_' +
      this.localID;
  }

  getOdor() {
    this.timerService.selectedOdor = JSON.stringify(this.odor).substring(9, JSON.stringify(this.odor).length - 2); // nasty hack to get around issue with PrimeNG returning incorrect data
//    this.timerService.events[this.timerService.events.length - 1].odor =  this.timerService.selectedOdor;
    this.odorPanelVisible = false;  // turn off Odor selection modal
    this.strengthPanelVisible = true;  // turn on Strength selection modal
    this.strengthPanelVisible = true; // turn on Strength selection modal
//    console.log( this.timerService.selectedOdor );
  }

  getStrength() {
    this.timerService.selectedStrength = JSON.stringify(this.strength).substring(9, JSON.stringify(this.strength).indexOf('"',9)); // nasty hack to get around issue with PrimeNG returning incorrect data
    this.strengthPanelVisible = false;
    this.timerService.pushEvent();
//    console.log( JSON.stringify(this.strength) + ' - ' + this.timerService.selectedStrength );
}


}
