import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-online-meeting-home',
    templateUrl: './online-meeting-home.component.html',
    styleUrls: ['./online-meeting-home.component.scss']
})
export class OnlineMeetingHomeComponent {
  listFaq:any = [
  {
    profileImage: 'assets/images/ui/user1.png',
    profileName: '<strong>Charles</strong> Brown',
    faqImage: 'assets/images/vid-placeholder.png',
    webpfaqImage: 'assets/images/vid-placeholder.png',
    faqHeading: 'Tracks who processed what and when',
    faqParagraph: [
      'BuildTwin for technical Teams is tailored to significantly improve the workflow of technical teams. BuildTwin automates meaningful manual work and enables technical teams to focus on what matters.'
    ],
    faqAnchor: 'Try BuildTwin Now',
    faqAnchorLink: 'https://www.buildtwin.com/get-started'
  },
  {
    profileImage: 'assets/images/ui/user2.png',
    profileName: '<strong>Marquees</strong> Lee',
    faqImage: 'assets/images/vid-placeholder.png',
    webpfaqImage: 'assets/images/vid-placeholder.png',
    faqHeading: 'Ensures quality requirements are met',
    faqParagraph: [
      'BuildTwin for technical Teams is tailored to significantly improve the workflow of technical teams. BuildTwin automates meaningful manual work and enables technical teams to focus on what matters - technical queries while BuildTwin helps to manage the project in background.'
    ],
    faqAnchor: 'Try BuildTwin Now',
    faqAnchorLink: 'https://www.buildtwin.com/get-started'
  },
  {
    profileImage: 'assets/images/ui/user3.png',
    profileName: '<strong>Katrina</strong> Paine',
    faqImage: 'assets/images/vid-placeholder.png',
    webpfaqImage: 'assets/images/vid-placeholder.png',
    faqHeading: 'Easily and quickly summaries activities into a workable cockpit',
    faqParagraph: [
      'BuildTwin for technical Teams is tailored to significantly improve the workflow of technical teams. BuildTwin automates meaningful manual work and enables technical teams to focus on what matters - technical queries while BuildTwin helps to manage the project in background.'
    ],
    faqAnchor: 'Try BuildTwin Now',
    faqAnchorLink: 'https://www.buildtwin.com/get-started'
  },
  {
    profileImage: 'assets/images/ui/user4.png',
    profileName: '<strong>Rajdeep</strong> Sharma',
    faqImage: 'assets/images/vid-placeholder.png',
    webpfaqImage: 'assets/images/vid-placeholder.png',
    faqHeading: 'Provides Automated feedback & learnings for easier understanding',
    faqParagraph: [
      'BuildTwin for technical Teams is tailored to significantly improve the workflow of technical teams. BuildTwin automates meaningful manual work and enables technical teams to focus on what matters - technical queries while BuildTwin helps to manage the project in background.'
    ],
    faqAnchor: 'Try BuildTwin Now',
    faqAnchorLink: 'https://www.buildtwin.com/get-started'
  },
  {
    profileImage: 'assets/images/ui/user1.png',
    profileName: '<strong>Owen</strong> Weah',
    faqImage: 'assets/images/vid-placeholder.png',
    webpfaqImage: 'assets/images/vid-placeholder.png',
    faqHeading: 'Generates one click reports such as for delays',
    faqParagraph: [
      'BuildTwin for technical Teams is tailored to significantly improve the workflow of technical teams. BuildTwin automates meaningful manual work and enables technical teams to focus on what matters - technical queries while BuildTwin helps to manage the project in background.'
    ],
    faqAnchor: 'Try BuildTwin Now',
    faqAnchorLink: 'https://www.buildtwin.com/get-started'
  }
  ]
  @ViewChild('hdFaq') hdFaq!: ElementRef;
  
    activeState:number = 1
    activeState2:number = 10 
    // title = 'BuildTwin - Software for technical Teams';
 

    activeState3: number = 1
    FixedDiv: any
    FixedDivPositionTop: any
    fixedDIvOffsetTop: any
    scrollPosition: any
  
    // scrolled div 
  
    scrollActivated: any
    scrollDivOffsettop: any
    scrolledDivHeight: any
    fixedElement: any

    

    constructor(private titleService: Title,private router: Router, public _languageService:LanguageService) { 

      router.events.subscribe((val) => {
        setTimeout(() => {
          try { this.scrollActivated = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (init 1):', error); }
          if(this.scrollActivated){
            try {
              this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
              this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
            } catch (error) {
              console.error('getBoundingClientRect failed for scrollActivated (init 1):', error);
            }
          }
        }, 2000);
    });

    router.events.subscribe((val) => {
      setTimeout(() => {
        try { this.scrollActivated = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (init 2):', error); }
        if (this.scrollActivated) {
          try {
            const rect = this.scrollActivated.getBoundingClientRect();
            this.scrollDivOffsettop = rect.top;
            this.scrolledDivHeight = rect.height;
          } catch (error) {
            console.error('getBoundingClientRect failed for scrollActivated (init 2):', error);
          }
        }
      }, 2000);
    });

    

    
    }


   
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);

  


    }
    tabbing2(tabList:any){
        console.log(tabList);
        this.activeState2 = tabList
      }
      tabbing(tabList:any){
        console.log(tabList);
        this.activeState = tabList
      }


      @HostListener('window:scroll', ['$event'])
      handleScroll(event: any) {
        try { this.FixedDiv = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for scrollActivated (scroll):', error); }
        if(this.FixedDiv){
          try { this.FixedDiv = this.FixedDiv.getBoundingClientRect().top; } catch (error) { console.error('getBoundingClientRect failed for FixedDiv (scroll):', error); }
          let topscroll = this.scrollDivOffsettop - this.FixedDiv;
          let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300;
          try { this.fixedElement = document.getElementById('scrollActivated'); } catch (error) { console.error('getElementById failed for fixedElement (scroll):', error); }
          if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
            try { this.fixedElement.classList.add("fixed"); } catch {}
            let activeELe: NodeListOf<Element> = [] as any;
            try { activeELe = document.querySelectorAll('[data-ele]'); } catch (error) { console.error('querySelectorAll failed for [data-ele] (scroll):', error); }
            activeELe.forEach((item, index) => {
              try {
                if (item.getBoundingClientRect().top < 500) {
                  this.activeState3 = index + 1;
                  try { item.classList.add("active"); } catch {}
                } else {
                  try { item.classList.remove("active"); } catch {}
                }
              } catch (error) {
                console.error('getBoundingClientRect failed for data-ele item (scroll):', error);
              }
            });
          } else {
            try { this.fixedElement.classList.remove("fixed"); } catch {}
          }
        }
      }
    
      scrollToSection(sectionId: string) {
        try {
          let section: HTMLElement | null = null;
          try { section = document.getElementById(sectionId); } catch (error) { console.error('getElementById failed in scrollToSection for:', sectionId, error); }
          if (section) {
            try { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (error) { console.error('scrollIntoView failed in scrollToSection for:', sectionId, error); }
            setTimeout(() => {
              try {
                const offsetTop = section!.getBoundingClientRect().top;
                const desiredOffset = offsetTop - 390;
                try { window.scrollBy(0, desiredOffset); } catch (error) { console.error('window.scrollBy failed in scrollToSection for:', sectionId, error); }
              } catch (error) {
                console.error('getBoundingClientRect failed during offset adjust in scrollToSection for:', sectionId, error);
              }
            }, 100);
          }
        } catch (error) {
          // ignore outer failures
        }
      }
    
}