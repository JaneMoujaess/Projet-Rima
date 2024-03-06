import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-link-cell-renderer',
  templateUrl: './link-cell-renderer.component.html',
  styleUrls: ['./link-cell-renderer.component.css']
})
export class LinkCellRendererComponent implements  ICellRendererAngularComp{
  params:any

  constructor() {
  }
  agInit(params: any): void {
    this.params = params;
    console.log(params);
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }
}
