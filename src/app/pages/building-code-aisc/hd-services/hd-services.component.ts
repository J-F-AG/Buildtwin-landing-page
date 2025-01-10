import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';


@Component({
  selector: 'app-hd-services-building-code-aisc',
  templateUrl: './hd-services.component.html',
  styleUrls: ['../../Home/hd-services/hd-services.component.scss','./hd-services.component.scss']
})
// './pages/Home/hd-services/hd-services.component'
export class HdServicesBuildingCodeAiscComponent implements OnInit, OnDestroy {
  @Input() page: string = '';
  constructor(
  ) { 
  }


  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }

}
