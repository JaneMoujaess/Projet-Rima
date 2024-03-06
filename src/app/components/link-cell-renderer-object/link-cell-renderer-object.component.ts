import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-link-cell-renderer-object',
  templateUrl: './link-cell-renderer-object.component.html',
  styleUrls: ['./link-cell-renderer-object.component.css']
})
export class LinkCellRendererObjectComponent implements ICellRendererAngularComp{
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
