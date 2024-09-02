import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

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
    faqImage: 'assets/images/vid4.png',
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
    faqImage: 'assets/images/vid4.png',
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
    faqImage: 'assets/images/vid4.png',
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
    faqImage: 'assets/images/vid4.png',
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
    faqImage: 'assets/images/vid4.png',
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
    title = 'BuildTwin - Software for technical Teams';
 

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

    

    constructor(private titleService: Title,private router: Router) { 

      router.events.subscribe((val) => {
        this.scrollActivated = document.getElementById('scrollActivated');
        setTimeout(() => {
          this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top
          this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height
          console.log(this.scrollDivOffsettop,this.scrolledDivHeight);
          
        }, 2000);
    });

    

    
    }


   
    
    ngOnInit() {
        this.titleService.setTitle(this.title);

  


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
        this.FixedDiv = document.getElementById('scrollActivated');
        this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
        let topscroll = this.scrollDivOffsettop - this.FixedDiv
        let winH = window.innerHeight
        let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300
        this.fixedElement = document.getElementById('scrollActivated');
    
        // inside active 
        if (this.FixedDiv < 200 && totalScroll > topscroll + 200) {
          this.fixedElement.classList.add("fixed")
          let activeELe = document.querySelectorAll('[data-ele]');
          activeELe.forEach((item, index) => {
            if (item.getBoundingClientRect().top < 500) {
              this.activeState3 = index + 1;
              item.classList.add("active")
            }
            else {
              item.classList.remove("active")
            }
    
          })
    
        }
        else {
          this.fixedElement.classList.remove("fixed")
    
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