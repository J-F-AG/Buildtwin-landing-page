import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.scss']
})
export class VideoPopupComponent implements OnInit {
  @Input() ytsrc: any;
  @Output() callClose = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  videoClose(){
    this.callClose.emit();
  }

}
