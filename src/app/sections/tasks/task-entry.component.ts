import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
import { GridOptions } from 'ag-grid-community';
import { GeneralDataService } from '../../services/general-data.service';
import { Task } from '../shared/task';

@Component({
  selector: 'task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent  {

  private gridOptions: GridOptions;
  private gridApi;
  private gridColumnApi;

  currentTask: Task;
  taskList: Array<Task>;
  taskListIndex: number;

  constructor(private dataService: GeneralDataService) {
      this.taskList = [];
      let colDefs = [
          {
              headerName: "Task Description",
              field: "description",
              width: 300
          }
      ];

      this.gridOptions = <GridOptions>{};
      this.gridOptions = {
           "columnDefs": colDefs,
      };

  }

  ngOnInit(): void {
      this.dataService.getTasks("002").subscribe( (data:any) => {
        console.log("ngOnInit and here is data for standard 002: ");
        console.log(data);
        this.taskList = data;
        this.taskListIndex = 0;
        this.currentTask = this.taskList[this.taskListIndex];
      });
  }


  onGridReady(params) {
     this.gridApi = params.api;
     this.gridColumnApi = params.columnApi;
  }


  onRowClicked(event): void {
    console.log("onRowSelected with event: ");
    console.log(event);
    this.currentTask= event.data;
    this.taskListIndex = event.rowIndex;
  }

  onSave(): void {
    this.gridApi.refreshCells();
  }

  onNew(): void {
    this.currentTask= new Task("001", "New Task Description");
    let temp = _.cloneDeep(this.taskList);
    temp.unshift(this.currentTask);
    this.taskList = [];
    this.taskListt = temp;
    this.gridApi.refreshCells();
  }

  onDelete(): void {

    let temp = _.cloneDeep(this.taskList);
    let deleted = temp.splice(this.taskListIndex,1);
    this.taskList = [];
    this.taskList = temp;
    this.currenttask = null;
  }

}
