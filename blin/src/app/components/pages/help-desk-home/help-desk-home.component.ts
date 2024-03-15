import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-desk-home',
  templateUrl: './help-desk-home.component.html',
  styleUrls: ['./help-desk-home.component.scss']
})
export class HelpDeskHomeComponent {
  activeState: number = 1
  title = 'BuildTwin - the hub for engineering AI software, projects and training';
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




  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    this.FixedDiv = document.getElementById('scrollActivated');
    this.FixedDiv = this.FixedDiv.getBoundingClientRect().top;
    let topscroll = this.scrollDivOffsettop - this.FixedDiv
    let winH = window.innerHeight
    console.log(winH);
    
    let totalScroll = Number(this.scrollDivOffsettop + this.scrolledDivHeight) - 300
    this.fixedElement = document.getElementById('scrollActivated');

    // inside active 
    if (this.FixedDiv < 200 && totalScroll > topscroll) {
      this.fixedElement.classList.add("fixed")
      let activeELe = document.querySelectorAll('[data-ele]');
      activeELe.forEach((item, index) => {
        if (item.getBoundingClientRect().top < 500) {
          this.activeState = index + 1;
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