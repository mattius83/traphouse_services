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

  staffList: Array<any>;
  currentStaff: any;
  skills: Array<string>;

  constructor( public dialog: MatDialog) {
      this.staffList = [];
      this.currentStaff = { "name": "", "skills": [] };
      this.skills = [
            "Cyber Security Audit",
            "Data Security",
            "Inspection Procedures",
            "E-Commerce | Payment Systems",
            "E-Commerce | Product Databases",
            "HIPPA Knowledge",
            "Red Team | Social Engineering",
            "Red Team | Penetration Operations",
            "Red Team | Penetration Audit",
            "Risk Assessment",
            "Software Development Process",
            "Software Specification Analysis",
            "Systems Analysis",
            "Testing | Performance",
            "Testing | Load",
            "Testing | Stress",
            "XY Flava Triad",
            "Zappa Kappa Doo"
    ];
  }

  ngOnInit(): void {
      this.loadMockStaff();
  }

  onBlur() {
    this.addNewStaff(this.currentStaff.name);
  }

  onKeyup(event) {
    if (event.key === "Enter") {
        this.addNewStaff(this.currentStaff.name);
    }
  }

  isNameUnique(name: string): boolean {
    let item = _.find(this.staffList, (entry:any) => {
        return entry.name === name;
    });
    if (typeof item === 'undefined') {
        return true;
    } else {
      return false;
    }
  }

  addNewStaff(name: string): void {
      if (name.length > 0  && this.isNameUnique(name)) {
        let newItem = _.cloneDeep(this.currentStaff);
        this.staffList.unshift(newItem);
        this.currentStaff ={ "name": "", "skills": [] };
      }
  }

  loadMockStaff() {
      this.staffList.push({"name": "Douglas Mayhew", "skills": []});
      this.staffList.push({"name": "Susan Smith", "skills": []});

    this.staffList.push({"name": "Douglas Mayhew", "skills": [this.skills[0], this.skills[5], this.skills[6]]});
    this.staffList.push({"name": "Susan Smith", "skills": [this.skills[0], this.skills[5], this.skills[9]]});
    this.staffList.push({"name": "Kyle Gruman", "skills": [this.skills[13], this.skills[15] ]});

  }
}
