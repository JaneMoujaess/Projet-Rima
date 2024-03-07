import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ColDef,
  GridReadyEvent,
  IServerSideDatasource,
  IServerSideGetRowsRequest,
} from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import {UserServiceService} from "../user-service.service";
import {LinkCellRendererComponent} from "../components/link-cell-renderer/link-cell-renderer.component";
import {AgGridAngular} from "ag-grid-angular";
import {
  LinkCellRendererObjectComponent
} from "../components/link-cell-renderer-object/link-cell-renderer-object.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})


export class TableComponent implements OnInit{
  @ViewChild('agGrid') agGrid: AgGridAngular | undefined;

  rowData :any;

  autoSizeStrategy : any = {
    type: 'fitCellContents'
  };
  constructor(private userService : UserServiceService) {
  }
  ngOnInit(){
    this.userService.getUserAwaitingApplications().subscribe((res:any)=>{
      console.log(res);
      this.rowData=res.data;
      if(this.agGrid){
        this.agGrid.api.autoSizeAllColumns(false);
        this.agGrid.api.refreshCells()
      }
    })}

  onGridReady(event : any){
    if(this.agGrid){
      this.agGrid.api.autoSizeAllColumns(false);
    }
  }


  colDefs: ColDef[] = [
    { field: 'attributes.average', headerName:'Average',filter:'agNumberColumnFilter', sortable:true },
    { field: 'attributes.grades', headerName:'Grades', cellRenderer : LinkCellRendererComponent, autoHeight:true},
    { field: 'attributes.cv', headerName:'CV', cellRenderer : LinkCellRendererObjectComponent, autoHeight:true },
    {field:'attributes.motivation_letter', headerName:'Motivation Letter', cellRenderer : LinkCellRendererObjectComponent, autoHeight:true},
    {field:'attributes.recommendation_letter', headerName:'Recommendation Letter', cellRenderer : LinkCellRendererObjectComponent, autoHeight:true},
    {field:'attributes.program.data.attributes.type', headerName:'Type', filter:'agTextColumnFilter',sortable:true },
    {field:'attributes.program.data.attributes.departement', headerName:'Department', filter:'agTextColumnFilter',sortable:true },
    {field:'attributes.program.data.attributes.tuition', headerName:'Tuition', filter:'agNumberColumnFilter',sortable:true },
    {field:'attributes.program.data.attributes.call_date', headerName:'Call Date', filter:'agDateColumnFilter',sortable:true },
    {field:'attributes.program.data.attributes.result_date', headerName:'Result Date',filter:'agDateColumnFilter',sortable:true},

  ];
}
