import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-online-meeting-home',
    templateUrl: './online-meeting-home.component.html',
    styleUrls: ['./online-meeting-home.component.scss']
})
export class OnlineMeetingHomeComponent {
    activeState:number = 1
    activeState2:number = 10 
    title = 'BuildTwin - Software for technical Teams';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
    tabbing2(tabList:any){
        console.log(tabList);
        this.activeState2 = tabList
      }
      tabbing(tabList:any){
        console.log(tabList);
        this.activeState = tabList
      }
}