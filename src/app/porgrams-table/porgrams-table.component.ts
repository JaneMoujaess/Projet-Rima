import {Component, ViewChild} from '@angular/core';
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
    { field: 'attributes.university', headerName:'Type',filter:'agNumberColumnFilter', sortable:true },

  ];
}
