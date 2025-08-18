import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-om-why-choose-us',
  templateUrl: './om-why-choose-us.component.html',
  styleUrls: ['./om-why-choose-us.component.scss']
})
export class OmWhyChooseUsComponent {
  @Input() listFaq:any = [];
  slides:any = []
  currentIndex = 0;
  constructor() {
  }

  ngOnInit(): void {
    this.slides = this.listFaq;
  }
  moveSlide(position:any) {
    if(position === 'prev') {
      if(this.currentIndex != 0){
        this.currentIndex -= 1;
      }
    }else {
      if(this.currentIndex != this.slides.length - 1){
        this.currentIndex += 1;
      }
    }
  }

}
