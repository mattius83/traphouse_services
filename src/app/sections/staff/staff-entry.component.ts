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
  newStaffName: string;
  skills: Array<string>;
  selectedSkills: Array<string>;

  constructor( public dialog: MatDialog) {
      this.staffList = [];
      this.currentStaff = { "name": "", "skills": [] };
      this.selectedSkills = [];
      this.newStaffName = "";
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
      this.currentStaff = this.staffList[0];
      this.selectedSkills = this.currentStaff.skills;
  }

  onBlur() {
    this.addNewStaff(this.newStaffName);
  }

  onKeyup(event) {
    if (event.key === "Enter") {
        this.addNewStaff(this.newStaffName);
    }
  }

  onStaffSelectionChange(event) {
      this.currentStaff = event.option.value;
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
        if (name.length > 0 && this.isNameUnique(name)) {
          this.staffList.unshift( { "name": name, "skills": [] });
          this.currentStaff = this.staffList[0];
          this.newStaffName = "";
        }
  }

  loadMockStaff() {

    this.staffList.push({"name": "Douglas Mayhew", "skills": [this.skills[1], this.skills[2], this.skills[4]]});
    this.staffList.push({"name": "Susan Smith", "skills": [this.skills[0], this.skills[5], this.skills[7]]});
    this.staffList.push({"name": "Kyle Gruman", "skills": [this.skills[3], this.skills[5] ]});

  }
}
