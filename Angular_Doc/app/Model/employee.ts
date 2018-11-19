import { EmployeeType } from "./employeeType";

export class Employee {
id: number;
name:string;
salary:number;
type: EmployeeType;

constructor(id: number, name:string, salary:number, type: EmployeeType){

    this.id=id;
    this.name=name;
    this.salary=salary;
    this.type=type;

}


}