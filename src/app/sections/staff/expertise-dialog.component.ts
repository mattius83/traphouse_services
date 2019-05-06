import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'expertise-dialog',
  templateUrl: 'expertise-dialog.component.html',
})
export class ExpertiseDialogComponent {

  skills: Array<string>;

  constructor(
    public dialogRef: MatDialogRef<ExpertiseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
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
        ]
    }

  onCancel(): void {
    this.dialogRef.close();
  }
  onOk(): void {
    this.dialogRef.close();
  }

}
