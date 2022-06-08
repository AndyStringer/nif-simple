import { Component, OnInit } from '@angular/core';
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
  slectedStrength: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
