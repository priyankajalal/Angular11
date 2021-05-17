import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table'
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employees ;

  ngOnInit(){
      this.employeeService.getEmployee().subscribe(d => this.employees =d);
  }

}
