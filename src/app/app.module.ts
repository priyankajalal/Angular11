import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatatableComponent } from "./datatable/datatable.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent

  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    BrowserAnimationsModule
     ],

  providers: [EmployeeService],

  bootstrap: [AppComponent]
})
export class AppModule { }
