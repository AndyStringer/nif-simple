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


  constructor(
    @Inject(LOCALE_ID) public localID: string,
    public timerService: TimerService
    ) {  }

  onPress() {
    this.timerService.odorPanelVisible = false;
    this.timerService.strengthPanelVisible = true;
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
        this.timerService.odorPanelVisible = true;
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

}
