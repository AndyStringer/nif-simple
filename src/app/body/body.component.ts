import { Component, OnInit } from '@angular/core';
import { Event } from '../_event';
import { TimerService } from '../services/timer.service';
import { States, EXCEL_EXTENSION, EXCEL_TYPE, PDF_EXTENSION } from '../_constants';
import { formatDate } from "@angular/common";
import { Inject } from "@angular/core";
import { LOCALE_ID } from "@angular/core";

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  events: Event[] = [
    { odor: 'Citrus', strength: 3, start: '00.042', end: '00.059', duration: '00.027' },
    { odor: 'Woody', strength: 2, start: '00.063', end: '00.069', duration: '00.006' },
    { odor: 'Fruity', strength: 4, start: '00.077', end: '00.090', duration: '00.013' }
  ];

  readonly state = States;
  exportColumns: any[] = [];
  cols: any[] = [];
  now = new Date();
  fileName: string = "";
  duration: number = 0;


  constructor(@Inject(LOCALE_ID) public localID: string, public timerService: TimerService) {
    
  }

  onPress() {
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
        this.duration = 0;
        break;
      case this.state.stop:
        this.timerService.stop = new Date().getTime();
        this.timerService.buttonText = 'Start';
        this.timerService.buttonPress = this.state.start;
        this.duration = this.timerService.stop - this.timerService.start;
        this.events.push({
          odor: 'Smelly',
          strength: 5,
          start: this.timerService.formatD(this.timerService.start - this.timerService.injectTime),
          end: this.timerService.formatD(this.timerService.stop - this.timerService.injectTime),
          duration: this.timerService.formatD(this.duration)
        });
        break;
    }
  }

exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default("p");
            (doc as any).autoTable(this.exportColumns, this.events);
            doc.save(this.fileName + PDF_EXTENSION);
        })
    })
}

exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.events);
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, "data");
      xlsx.writeFile(workbook, this.fileName + EXCEL_EXTENSION);
    });
}

display: boolean = false;

showDialog() {
    this.display = true;
}

  ngOnInit(): void {
    this.cols = [
      { field: 'odor', header: 'Odor' },
      { field: 'strength', header: 'Strength' },
      { field: 'start', header: 'Start' },
      { field: 'end', header: 'End' },
      { field: 'duration', header: 'Duration' }
    ];
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
    this.fileName = "GCO_Events_" + formatDate(this.now, 'yyyy-MM-dd_HH-mm-ss', this.localID) + "_" + this.localID;

  }
}
  
