import { Component } from '@angular/core';
import {
  ColDef,
  GridReadyEvent,
  IServerSideDatasource,
  IServerSideGetRowsRequest,
} from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  rowData = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ];

  constructor(private http: HttpClient) {}

  //   public columnDefs: ColDef[] = [
  //     { field: 'athlete', minWidth: 220 },
  //     { field: 'country', minWidth: 200 },
  //     { field: 'year' },
  //     { field: 'sport', minWidth: 200 },
  //     { field: 'gold' },
  //     { field: 'silver' },
  //     { field: 'bronze' },
  //   ];
  //   public defaultColDef: ColDef = {
  //     flex: 1,
  //     minWidth: 100,
  //     sortable: false,
  //   };
  //   public rowData!: any[];

  //   onGridReady(params: GridReadyEvent<any>) {
  //     this.http
  //       .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //       .subscribe((data) => {
  //         // setup the fake server with entire dataset
  //         const fakeServer = createFakeServer(data);
  //         // create datasource with a reference to the fake server
  //         const datasource = createServerSideDatasource(fakeServer);
  //         // register the datasource with the grid
  //         params.api!.setGridOption('serverSideDatasource', datasource);
  //       });
  //   }
  // }

  // function createServerSideDatasource(server: any): IServerSideDatasource {
  //   return {
  //     getRows: (params: any) => {
  //       console.log('[Datasource] - rows requested by grid: ', params.request);
  //       // get data for request from our fake server
  //       const response = server.getData(params.request);
  //       // simulating real server call with a 500ms delay
  //       setTimeout(() => {
  //         if (response.success) {
  //           // supply rows for requested block to grid
  //           params.success({ rowData: response.rows });
  //         } else {
  //           params.fail();
  //         }
  //       }, 500);
  //     },
  //   };
  // }
  // function createFakeServer(allData: any[]) {
  //   return {
  //     getData: (request: IServerSideGetRowsRequest) => {
  //       // in this simplified fake server all rows are contained in an array
  //       const requestedRows = allData.slice(request.startRow, request.endRow);
  //       return {
  //         success: true,
  //         rows: requestedRows,
  //       };
  //     },
  //   };
}
