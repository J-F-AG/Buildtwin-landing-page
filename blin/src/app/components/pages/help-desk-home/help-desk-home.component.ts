import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-help-desk-home',
  templateUrl: './help-desk-home.component.html',
  styleUrls: ['./help-desk-home.component.scss']
})
export class HelpDeskHomeComponent {
  activeState:number = 1 
    title = 'BuildTwin - the hub for engineering AI software, projects and training';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    tabbing(tabList:any){
      console.log(tabList);
      
      this.activeState = tabList
    }

}