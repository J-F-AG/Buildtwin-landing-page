import { Component, HostListener ,AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/GlobalService';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-email-marketing-home',
    templateUrl: './email-marketing-home.component.html',
    styleUrls: ['./email-marketing-home.component.scss']
})
export class EmailMarketingHomeComponent  implements AfterViewInit, OnInit  {
    
  marketPlace: number = 1

    FixedDiv: any
    scrollActivated: any
    scrollDivOffsettop: any
    scrolledDivHeight: any
    fixedElement: any
  


element:any

 

    // title = 'BuildTwin - good reasons';
 
    constructor(private titleService:Title,private globalService: GlobalService,private router: Router,private route: ActivatedRoute, public _languageService:LanguageService) {


      router.events.subscribe((val) => {
        setTimeout(() => {
          try { this.scrollActivated = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (init):', error); }
          if(this.scrollActivated){
            try {
              this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
              this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
            } catch (error) {
              console.error('getBoundingClientRect failed for scrollActivated (init):', error);
            }
          }
        }, 2000);
    });
    }
    

  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }


    ngOnInit() {
        // this.titleService.setTitle(this.title);
        // this.isHeaderSticky = new Array(this.headerElements.length).fill(false);
  try { this.element = document.getElementsByClassName('tableheader'); } catch (error) { console.error('getElementsByClassName failed for tableheader (ngOnInit):', error); }

        
      }

      showPopup = false;

  //   loadScript() {
  //   // Create script element
  //   const script = this.renderer.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

  //   // Append script element to the body
  //   this.renderer.appendChild(this.elRef.nativeElement, script);
  // }

  call(){
    this.showPopup =true
    }
    closePopupStatus($event) {
      this.showPopup = false;
    }
     
    // @HostListener('window:scroll', ['$event'])
    // handleScroll(event: any) {
    //   this.FixedDiv = document.getElementById('scrollActivated');
    //   this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
    //   let topscroll = this.scrollDivOffsettop - this.FixedDiv
    //   let winH = window.innerHeight
    //   let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300
    //   this.fixedElement = document.getElementById('scrollActivated');
  
    //   // inside active 
    //   if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
    //     // this.fixedElement.classList.add("fixedData")
    //     let activeELe = document.querySelectorAll('[data-ele]');
    //     activeELe.forEach((item, index) => {
    //       if (item.getBoundingClientRect().top < 500) {
    //         this.activeState = index + 1;
    //         item.classList.add("active")
    //       }
    //       else {
    //         item.classList.remove("active")
    //       }
  
    //     })
  
    //   }
    //   else {
    //     // this.fixedElement.classList.remove("fixedData")
  
    //   }
    // }
  
    // scrollToSection(sectionId: string) {
    //   const section = document.getElementById(sectionId);
    //   if (section) {
    //     section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     setTimeout(() => {
    //       const offsetTop = section.getBoundingClientRect().top;
    //       const desiredOffset = offsetTop - 390; 
    //       window.scrollBy(0, desiredOffset);
    //     }, 100); 
    //   }
    // }


    ngAfterViewInit() {
      this.route.fragment.subscribe(fragment => {
          if (fragment) {
            setTimeout(() => {
              let element: HTMLElement | null = null;
              try { element = document.getElementById(fragment); } catch (error) { console.error('getElementById failed for fragment target (ngAfterViewInit):', fragment, error); }
              if (element) {
                try { element.scrollIntoView({ behavior: 'smooth' }); } catch (error) { console.error('scrollIntoView failed for fragment target (ngAfterViewInit):', fragment, error); }
              }
            }, 2000); 
          }
        });
  }


  marketplaceNumber(event) {
    this.marketPlace = event
  }
 
}