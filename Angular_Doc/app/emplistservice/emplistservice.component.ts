import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../services/empdata.service';

@Component({
  selector: 'app-emplistservice',
  templateUrl: './emplistservice.component.html',
  styleUrls: ['./emplistservice.component.css'],
//  provider : [EmpdataService]

})
export class EmplistserviceComponent implements OnInit {

  employees: any[];

  constructor(private _empService: EmpdataService) { }

  ngOnInit() {

    this.employees =this._empService.getEmployees();
    
  }

}
