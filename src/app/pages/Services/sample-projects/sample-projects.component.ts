import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-projects',
  templateUrl: './sample-projects.component.html',
  styleUrl: './sample-projects.component.scss'
})
export class SampleProjectsComponent {

  selectedIndex: number = 0;

 nextStep() {
    if (this.selectedIndex != 3) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }

}

