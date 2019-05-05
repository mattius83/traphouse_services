import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
import { GridOptions } from 'ag-grid-community';
import { GeneralDataService } from '../../services/general-data.service';
import { Task } from '../shared/task';
import { Standard } from '../shared/standard';

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
  standardList: Array<Standard>;
  standardListIndex: number;
  currentStandard: Standard;


  constructor(private dataService: GeneralDataService) {
      this.taskList = [];
      this.standardList = [];
      this.taskListIndex = 0;
      this.standardListIndex = 0;

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

      this.dataService.getStandards().subscribe( (data:any) => {
        console.log("ngOnIniti and here is standard data: ");
        console.log(data);
        if (data.length > 0) {
          this.standardList = data;
          this.standardListIndex = 0;
          this.currentStandard = this.standardList[this.standardListIndex];
          console.log("Here is the currentStandard: ");
          console.log(this.currentStandard);
          this.loadTasks(this.currentStandard._id);
        }

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
    this.taskList = temp;
    this.gridApi.refreshCells();
  }

  onDelete(): void {

    let temp = _.cloneDeep(this.taskList);
    let deleted = temp.splice(this.taskListIndex,1);
    this.taskList = [];
    this.taskList = temp;
    this.currentTask = null;
  }

  loadTasks(standardId: string): void {
      this.dataService.getTasks(standardId).subscribe( (data:any) => {
         this.taskList = data;
         if (this.taskList.length > 0 ) {
             this.taskList = data;
             this.taskListIndex = 0;
             this.currentTask = this.taskList[this.taskListIndex];
         }
      });
  }

}
