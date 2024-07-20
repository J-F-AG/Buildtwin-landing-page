import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalPopupService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  html: HTMLElement | string;
  @ViewChild('myModal', { static: false }) modal: ElementRef;

  public flag: boolean;
  constructor(private modalService: ModalPopupService) {}

  ngOnInit() {
    this.modalService.modal().subscribe((data) => {
      if (data.html) {
        this.html = data.html;
        if (data.type.isChild) {
          setTimeout(() => {
            this.modal.nativeElement.style.display = 'block';
          }, 0)
        } else {
          this.modal.nativeElement.style.display = 'block';
        }
      }
    });
  }

  close() {
    this.modalService.closeModal();
    this.html = '';
    this.modal.nativeElement.style.display = 'none';
  }
}
