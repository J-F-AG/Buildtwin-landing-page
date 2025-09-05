import { Component, OnInit } from '@angular/core';
import { functionList } from 'buildtwin-library-ux/core';//buildtwin-library-ux
// import { ModuleImportService } from 'src/app/overview/service/module-import.service';

@Component({
  selector: 'app-global-banner',
  templateUrl: './global-banner.component.html',
  styleUrls: ['./global-banner.component.scss']
})
export class GlobalBannerComponent implements OnInit {
  _activityThreadService: any;
  unsubscribe: any = {}
  stepAddClass: boolean = false;
  constructor(
    // private _moduleImportService: ModuleImportService
  ) {

    /**get activity thread service */
    // this._moduleImportService.loadOneJfActivityStream('ActivityThreadService', 'service').then((res) => {
    //   this._activityThreadService = res

    //   this.unsubscribe['scrollEvent'] = this._activityThreadService.scrollEvent.subscribe((res) => {
    //     if (res['type'] == 'scrollWrapper') {

    //       const tabList = document.querySelector("#banner-wrapper");
    //       const mobDesign = document.querySelector("#mobDesign");
    //       const tabListTop = tabList.getBoundingClientRect().top;
    //       // console.log(tabListTop)
    //       if (tabListTop <= -413) {
    //         if(!this.stepAddClass){
    //           this.stepAddClass = true;
    //           tabList.classList.add("fixed");
    //           mobDesign.classList.add("fixed");
    //           setTimeout(() => {
    //             tabList.classList.add("show");
    //             mobDesign.classList.add("show");
    //           }, 500);
    //         }
    //       }
    //       else {
    //         if(this.stepAddClass){
    //           this.stepAddClass = false;
    //           tabList.classList.remove("show");
    //           mobDesign.classList.remove("show");
    //           setTimeout(() => {
    //             tabList.classList.remove("fixed");
    //             mobDesign.classList.remove("fixed");
    //           }, 300);
    //         }
    //       }
    //     }
    //   });
    // })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    functionList.unsubscribeAll(this.unsubscribe)
    try {
      const tabList = document.querySelector("#banner-wrapper");
      const mobDesign = document.querySelector("#mobDesign");
      if(tabList){
        tabList.classList.remove("fixed");
        tabList.classList.remove("show");
      }
      if(mobDesign){
        mobDesign.classList.remove("fixed");
        mobDesign.classList.remove("show");
      }
    } catch (error) {
      // SSR/document not available
    }
  }

}
