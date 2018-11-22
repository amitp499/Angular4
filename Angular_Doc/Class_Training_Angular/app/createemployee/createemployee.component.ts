import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from '../Model/iemployee';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  UserFunction(frm:NgForm): void{
    //var emp:IEmployee;

    console.log(frm.value);
  }

}
