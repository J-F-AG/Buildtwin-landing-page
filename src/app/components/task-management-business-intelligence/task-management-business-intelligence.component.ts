import { Component } from '@angular/core';

@Component({
  selector: 'app-task-management-business-intelligence',
  templateUrl: './task-management-business-intelligence.component.html',
  styleUrls: ['./task-management-business-intelligence.component.scss']
})
export class TaskManagementBusinessIntelligenceComponent {
 activeState:number = 1

 tabinbg(state:any){
  this.activeState = state
 }
}
