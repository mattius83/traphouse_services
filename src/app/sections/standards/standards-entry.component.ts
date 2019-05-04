import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
import { GridOptions } from 'ag-grid-community';
import { GeneralDataService } from '../../services/general-data.service';
import { Standard } from '../shared/standard';

@Component({
  selector: 'standards-entry',
  templateUrl: './standards-entry.component.html',
  styleUrls: ['./standards-entry.component.css']
})
export class StandardsEntryComponent  {

  private gridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;

  currentStandard: Standard;
  standardsList: Array<Standard>;
  standardsListIndex: number;

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

  }

  ngOnInit(): void {
      this.dataService.getStandards().subscribe( (data:any) => {
        console.log("ngOnIniti and here is data: ");
        console.log(data);
        this.standardsList = data;
        this.standardsListIndex = 0;
        this.currentStandard = this.standardsList[this.standardsListIndex];
      });
  }


  onGridReady(params) {
     this.gridApi = params.api;
     this.gridColumnApi = params.columnApi;
  }


  onRowClicked(event): void {
    console.log("onRowSelected with event: ");
    console.log(event);
    this.currentStandard = event.data;
    this.standardsListIndex = event.rowIndex;
  }

  onSave(): void {
    console.log("onSave initiated");
    this.gridApi.refreshCells();
  }

  onNew(): void {
    console.log("onNew initiated");
    this.currentStandard = new Standard("New Standard");
    let temp = _.cloneDeep(this.standardsList);
    temp.unshift(this.currentStandard);
    this.standardsList = [];
    this.standardsList = temp;
    this.gridApi.refreshCells();
  }

  onDelete(): void {

    let temp = _.cloneDeep(this.standardsList);
    let deleted = temp.splice(this.standardsListIndex,1);
    this.standardsList = [];
    this.standardsList = temp;
    this.currentStandard = null;
  }

}
