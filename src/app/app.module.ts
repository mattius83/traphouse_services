import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StandardsEntryComponent } from './sections/standards/standards-entry.component';
import { TaskEntryComponent } from './sections/tasks/task-entry.component';
import { StaffEntryComponent } from './sections/staff/staff-entry.component';
import { ExpertiseDialogComponent } from './sections/staff/expertise-dialog.component';
import { GeneralDataService } from './services/general-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpertiseDialogComponent,
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    SidenavListComponent,
    StandardsEntryComponent,
    StaffEntryComponent,
    TaskEntryComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RoutingModule
  ],
  providers: [GeneralDataService],
  entryComponents: [
    ExpertiseDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
