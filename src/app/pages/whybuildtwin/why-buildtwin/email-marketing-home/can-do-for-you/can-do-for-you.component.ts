import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-can-do-for-you',
  templateUrl: './can-do-for-you.component.html',
  styleUrl: './can-do-for-you.component.scss'
})
export class CanDoForYouComponent {


  prevNav:boolean = false;
  nextNav:boolean = true;
  effect = 'scrollx';
  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent;
  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    this.myCarousel.pre();
    if(this.myCarousel.activeIndex === 0) {
      this.prevNav = false;
    }

    if(this.myCarousel.activeIndex === 1) {
      this.nextNav = true;
    }
  }

  next() {
    this.myCarousel.next();
    if(this.myCarousel.activeIndex === 1) {
      this.prevNav = true;
    }

    if(this.myCarousel.activeIndex === 2) {
      this.nextNav = false;
    }
  }

  qualityArray = [
    {
      // icon: 'assets/images/vendor/icon1.png',
      title: 'E-Mail',
      addClass: 'v2'
      // description: 'One Feed | Submission & RFI Training | AI Assistant',
    },
    {
      // icon: 'assets/images/vendor/icon2.png',
      title: 'Compliant E-Mail Inbox for Teams',
      // description: 'Visibility & promotion on all channels',
    },
    {
      // icon: 'assets/images/vendor/icon3.png',
      title: 'Summarizing E-Mail and showing 360° technical context and history',
      // description: 'Easy to bid private and public projects',
    },
    {
      // icon: 'assets/images/vendor/icon4.png',
      title: 'Tracking of discussed topics, timelines, etc. and updating project management',
      // description: 'Partner with business to deliver results',
    },
    {
      // icon: 'assets/images/vendor/icon5.png',
      title: 'Drafting respond e-mails with relevant context',
      // description: 'Get qualified for new markets / clients',
    },
    {
      // icon: 'assets/images/vendor/icon6.png',
      title: 'File Management',
      addClass: 'v2'
      // description: 'You required support on-site from a <br>technical specialist?',
    },
    {
      // icon: 'assets/images/vendor/icon7.png',
      title: 'Automated Filemanagement - Save & Done',
      // description: 'Attract better offers with marketing and <br>legal guidance.',
    },
    {
      // icon: 'assets/images/vendor/icon8.png',
      title: 'Files are available in the Cloud across different offices / for clients ',
      // description: 'You have our acquisition expertise from <br>start to close.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Compliant Backup / redundant storage',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Automated Single Point of Truth (consolidating shared Files via E-Mails, etc. with files saved locally)',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'CDE Integration',
      addClass: 'v2'
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Consolidate Client CDE into your workenviromment - 1 System to manage all client systems',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Automated project documentation',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Detailed Reports of: Revisions, Type of comments, etc.',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'AI based Project Management System',
      addClass: 'v2'
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'AI based Project Planning and Scheduling',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'AI based Resource Management & Allocation',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'AI based Time Tracking',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'HCM',
      addClass: 'v2'
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Manage your teams, apply your policies (Holidays, etc.) while complying with local law',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Automate Leave applications detailed  HR reports',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Automate Asset Management and Tracking according to your policy',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Resignation & Peformance Evalulation',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Calendar module with leaves, meetings & interview integration across platform',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Jobs',
      addClass: 'v2'
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Manage your teams, apply your policies (Holidays, etc.) while complying with local law',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Automate Leave applications detailed  HR reports',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'AI based Resume Management & Interview Scheduling with video Interviews, questions & answer',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
    {
      // icon: 'assets/images/vendor/icon9.png',
      title: 'Customized Onboarding from interview to hiring',
      // description: 'If we can’t find your ideal buyer, you pay <br>absolutely zero.',
    },
  ];

}
