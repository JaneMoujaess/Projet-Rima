import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {UserServiceService} from "../user-service.service";
import {ColDef} from "ag-grid-community";
import {LinkCellRendererComponent} from "../components/link-cell-renderer/link-cell-renderer.component";

@Component({
  selector: 'app-porgrams-table',
  templateUrl: './porgrams-table.component.html',
  styleUrls: ['./porgrams-table.component.css']
})
export class PorgramsTableComponent {

  @ViewChild('agGrid') agGrid: AgGridAngular | undefined;
  @Output() emit: EventEmitter<any> = new EventEmitter<any>();
  rowData :any;

  autoSizeStrategy : any = {
    type: 'fitCellContents'
  };
  constructor(private userService : UserServiceService) {
  }
  ngOnInit(){
    this.userService.getPrograms().subscribe((res:any)=>{
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
    { field: 'attributes.university.data.attributes.name', headerName:'University',filter:'agTextColumnFilter', sortable:true },
    { field: 'attributes.university.data.attributes.country', headerName:'Country',filter:'agTextColumnFilter', sortable:true },
    { field: 'attributes.type', headerName:'Type',filter:'agTextColumnFilter', sortable:true },
    { field: 'attributes.call_date', headerName:'Call Date',filter:'agDateColumnFilter', sortable:true },
    { field: 'attributes.result_date', headerName:'Result Date',filter:'agDateColumnFilter', sortable:true },
    { field: 'attributes.submission_date', headerName:'Subdmission Date',filter:'agDateColumnFilter', sortable:true },
    { field: 'attributes.departement', headerName:'Departement',filter:'agTextColumnFilter', sortable:true },
    { field: 'attributes.tuition', headerName:'Tuition',filter:'agNumberColumnFilter', sortable:true },
    { field: 'attributes.registration', headerName:'Registration',filter:'agNumberColumnFilter', sortable:true },
    { field: 'attributes.scholarship', headerName:'Scholarship',filter:'agBooleanColumnFilter', sortable:true },
    { field: 'attributes.students_count', headerName:'Student Count',filter:'agNumberColumnFilter', sortable:true },
  ];

  onRowSelectionChanged(event : any){
    console.log(event);
    console.log(this.agGrid?.api.getSelectedRows());
    this.emit.emit(this.agGrid?.api.getSelectedRows()[0].id);
  }
}
