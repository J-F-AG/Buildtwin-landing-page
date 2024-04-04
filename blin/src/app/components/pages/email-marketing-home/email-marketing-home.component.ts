import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-email-marketing-home',
    templateUrl: './email-marketing-home.component.html',
    styleUrls: ['./email-marketing-home.component.scss']
})
export class EmailMarketingHomeComponent {
    activeState: number = 1
    activeState2: number = 11
    activeState3: number = 21
    FixedDiv: any
    FixedDivPositionTop: any
    fixedDIvOffsetTop: any
    fixedElement3: any
    scrollPosition: any
  
    FixedDiv2: any
    // scrolled div 
    scrollActivated: any
    scrollDivOffsettop: any
    scrolledDivHeight: any
    fixedElement: any
    fixedElement1: any
  
  navBar:any
  tabHead:any

    title = 'BuildTwin - good reasons';
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
    @HostListener('window:scroll', ['$event'])
    handleScroll(event: any) {
      this.FixedDiv = document.getElementById('scrollActivated');
      this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
      let topscroll = this.scrollDivOffsettop - this.FixedDiv
      let winH = window.innerHeight
      let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300
      this.fixedElement = document.getElementById('scrollActivated');
      // inside active 
      if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
        this.fixedElement.classList.add("fixed2")
  
        let activeELe = document.querySelectorAll('[data-ele]');
        activeELe.forEach((item, index) => {
          if (item.getBoundingClientRect().top < 500) {
            this.activeState = index + 1;
            item.classList.add("active")
  
         
          }
          else {
            item.classList.remove("active")
           
          }
          // /////////////
          if (this.activeState === 2) {
            this.fixedElement1 = document.getElementById('scrollActivated2');
  
            if (this.fixedElement1) {
              this.fixedElement1.classList.add("fixed");
            }
  
            for (let i = 11; i <= 16; i++) {
              let activeELe1 = document.querySelectorAll(`[data-ele${i}]`);
              activeELe1.forEach((item1) => {
                const topPosition = item1.getBoundingClientRect().top;
                if (topPosition < 500) {
                  item1.classList.add("active");
                  const dataIndex = item1.getAttribute(`data-ele${i}`);
                  if (dataIndex) {
                    this.activeState2 = parseInt(dataIndex, 10);
                  }
                } else {
                  item1.classList.remove("active");
                }
              });
            }
          }
          else {
            this.fixedElement1 = document.getElementById('scrollActivated2');
            this.fixedElement1.classList.remove("fixed")
          }
  
          if (this.activeState === 3) {
  
            this.navBar = document.getElementById('navBar');
            this.navBar.classList.add("removeMainNav")
            
  
            this.tabHead = document.getElementById('tabHead');
            this.tabHead.classList.add("removeMainNav")
  
  
            this.fixedElement3 = document.getElementById('scrollActivated3');
            if (this.fixedElement3) {
              this.fixedElement3.classList.add("fixedData");
            }
            for (let j = 21; j <= 24; j++) {
              let activeELe3 = document.querySelectorAll(`[data-element${j}]`);
              activeELe3.forEach((item3) => {
                const topPosition = item3.getBoundingClientRect().top;
                if (topPosition < 200) {
                  item3.classList.add("active");
                  const dataIndex = item3.getAttribute(`data-element${j}`);
                  if (dataIndex) {
                    this.activeState3 = parseInt(dataIndex);
                  }
                } else {
                  item3.classList.remove("active");
                }
              });
            }
          }
          else {
            this.fixedElement3 = document.getElementById('scrollActivated3');
            this.fixedElement3.classList.remove("fixedData")
            this.navBar?.classList.remove("removeMainNav")
            this.tabHead?.classList.remove("removeMainNav")
          }
        })
  
      }
      else {
        this.fixedElement.classList.remove("fixed2")
  
       
  
      }
    }
  
    scrollToSection(sectionId: string) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Scroll the section into view smoothly
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
        // Adjust scroll position to maintain a 100-pixel gap from the top of the viewport
        setTimeout(() => {
          const offsetTop = section.getBoundingClientRect().top;
          const desiredOffset = offsetTop - 390; // Adjust the desired offset as needed
          window.scrollBy(0, desiredOffset);
        }, 100); // Adjust the delay if needed
      }
    }

}