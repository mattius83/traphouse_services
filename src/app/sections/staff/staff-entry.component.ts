import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ExpertiseDialogComponent } from './expertise-dialog.component';
import * as _ from "lodash";

import { GeneralDataService } from '../../services/general-data.service';

@Component({
  selector: 'staff-entry',
  templateUrl: './staff-entry.component.html',
  styleUrls: ['./staff-entry.component.css']
})
export class StaffEntryComponent  {


  constructor( public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  onEdit() {
        const dialogRef = this.dialog.open(ExpertiseDialogComponent, { width: '200', height: '300'});
    }


}
