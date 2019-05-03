import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
import { GridOptions } from 'ag-grid-community';
import { GeneralDataService } from '../../services/general-data.service';

@Component({
  selector: 'standards-entry',
  templateUrl: './standards-entry.component.html',
  styleUrls: ['./standards-entry.component.css']
})
export class StandardsEntryComponent  {

  private gridOptions: GridOptions;
  private rowData: any;
  private gridApi;
  private gridColumnApi;

  standardName: string;
  standardBoilerplate: string;
  standardsList: Array<any>;

  constructor(private dataService: GeneralDataService) {
      this.standardsList = [];
      let colDefs = [
          {
              headerName: "Standard Name",
              field: "name",
              width: 300
          }
      ];

      this.gridOptions = <GridOptions>{};
      this.gridOptions = {
           "columnDefs": colDefs,
      };

      this.rowData = [];
  }

  ngOnInit(): void {
      this.dataService.getStandards().subscribe( (data:any) => {
        this.rowData = data;
      });
  }


  onGridReady(params) {
     this.gridApi = params.api;
     this.gridColumnApi = params.columnApi;
  }

  onGridSelectionChanged(): void {
     let selectedRows = this.gridApi.getSelectedRows();
     console.log("The selected rows: ");
     console.log(selectedRows);
     this.standardName = selectedRows[0].name;
  }

}
