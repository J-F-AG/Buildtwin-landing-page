import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-help-desk-home',
  templateUrl: './help-desk-home.component.html',
  styleUrls: ['./help-desk-home.component.scss']
})
export class HelpDeskHomeComponent {

    title = 'Help Desk Home - Blin';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

}