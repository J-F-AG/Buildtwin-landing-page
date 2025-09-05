import { Component, ComponentFactoryResolver, HostListener, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-help-desk-home',
  templateUrl: './help-desk-home.component.html',
  styleUrls: ['./help-desk-home.component.scss']
})
export class HelpDeskHomeComponent {


  // @ViewChild('HdBannerNewComp', { read: ViewContainerRef, static: true })
  // public HdBannerNewComp: ViewContainerRef;
  // @ViewChild('HdServicesComp', { read: ViewContainerRef, static: true })
  // public HdServicesComp: ViewContainerRef;
  // @ViewChild('HdProvidersComp', { read: ViewContainerRef, static: true })
  // public HdProvidersComp: ViewContainerRef;
  // @ViewChild('HdDiscoverProjectsComp', { read: ViewContainerRef, static: true })
  // public HdDiscoverProjectsComp: ViewContainerRef;
  // @ViewChild('HdWhyBuildtwinComp', { read: ViewContainerRef, static: true })
  // public HdWhyBuildtwinComp: ViewContainerRef;
  // @ViewChild('HdIntegrationsComp', { read: ViewContainerRef, static: true })
  // public HdIntegrationsComp: ViewContainerRef;
  // @ViewChild('HdTestimonialsComp', { read: ViewContainerRef, static: true })
  // public HdTestimonialsComp: ViewContainerRef;
  // @ViewChild('HdGoodCompanyComp', { read: ViewContainerRef, static: true })
  // public HdGoodCompanyComp: ViewContainerRef;
  // @ViewChild('HdNavbarComp', { read: ViewContainerRef, static: true })
  // public HdNavbarComp: ViewContainerRef;
  // @ViewChild('HdFooterComp', { read: ViewContainerRef, static: true })
  // public HdFooterComp: ViewContainerRef;

  activeState: number = 1
  // title = 'BuildTwin - the hub for engineering AI software, projects and training';
  FixedDiv: any
  FixedDivPositionTop: any
  fixedDIvOffsetTop: any
  scrollPosition: any
  
  // Carousel slide tracking


  // scrolled div 

  scrollActivated: any
  scrollDivOffsettop: any
  scrolledDivHeight: any
  fixedElement: any

  constructor(private titleService: Title,private router: Router, private resolver: ComponentFactoryResolver, public _languageService: LanguageService) { 

    router.events.subscribe((val) => {
      setTimeout(() => {
        try {
          this.scrollActivated = document.getElementById('scrollActivated');
          if(this.scrollActivated){
            try {
              this.scrollDivOffsettop = this.scrollActivated.getBoundingClientRect().top;
              this.scrolledDivHeight = this.scrollActivated.getBoundingClientRect().height;
            } catch (error) {
              console.error('getBoundingClientRect failed for scrollActivated (init):', error);
            }
          }
        } catch (error) {
          console.error('getElementById failed for scrollActivated (init):', error);
        }
      }, 2000);
  });
  
  }

  ngOnInit() {
    // this.loadHdNavbarComp()
    // this.loadHdFooterComp()
    // this.loadHdBannerNewComp()
    // this.loadHdServicesComp()
    // this.loadHdProvidersComp()
    // this.loadHdDiscoverProjectsComp()
    // this.loadHdWhyBuildtwinComp()
    // this.loadHdIntegrationsComp()
    // this.loadHdTestimonialsComp()
    // this.loadHdGoodCompanyComp()
    // this.titleService.setTitle(this.title);

  
  }




  @HostListener('window:scroll', ['$event'])
  handleScroll(event: any) {
    try {
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
                this.activeState = index + 1;
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
    } catch (error) {
      // ignore outer failures
    }
  }

  scrollToSection(sectionId: string) {
    try {
      let el: HTMLElement | null = null;
      try { el = document.getElementById(sectionId); } catch (error) { console.error('getElementById failed in scrollToSection for:', sectionId, error); }
      if (el) {
        try { el.scrollIntoView({ behavior: 'smooth' }); } catch (error) { console.error('scrollIntoView failed in scrollToSection for:', sectionId, error); }
      }
    } catch (error) {
      // ignore outer failures
    }
  }
  

  // async loadHdNavbarComp(){
  //   if (this.HdNavbarComp) {
  //     this.HdNavbarComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../../../pages/includes/hd-navbar/hd-navbar.module').then(m => {
  //       MyComponent = m.HdNavbarModule.HdNavbarComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdNavbarComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdFooterComp(){
  //   if (this.HdFooterComp) {
  //     this.HdFooterComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../../../pages/includes/hd-footer/hd-footer.module').then(m => {
  //       MyComponent = m.HdFooterModule.HdFooterComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdFooterComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdBannerNewComp(){
  //   if (this.HdBannerNewComp) {
  //     this.HdBannerNewComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-banner-new/hd-banner-new.module').then(m => {
  //       MyComponent = m.HdBannerNewModule.HdBannerNewComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdBannerNewComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdServicesComp(){
  //   if (this.HdServicesComp) {
  //     this.HdServicesComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-services/hd-services.module').then(m => {
  //       MyComponent = m.HdServicesModule.HdServicesComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdServicesComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdProvidersComp(){
  //   if (this.HdProvidersComp) {
  //     this.HdProvidersComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-providers/hd-providers.module').then(m => {
  //       MyComponent = m.HdProvidersModule.HdProvidersComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdProvidersComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdDiscoverProjectsComp(){
  //   if (this.HdDiscoverProjectsComp) {
  //     this.HdDiscoverProjectsComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-discover-projects/hd-discover-projects.module').then(m => {
  //       MyComponent = m.HdDiscoverProjectsModule.HdDiscoverProjectsComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdDiscoverProjectsComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdWhyBuildtwinComp(){
  //   if (this.HdWhyBuildtwinComp) {
  //     this.HdWhyBuildtwinComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-why-buildtwin/hd-why-buildtwin.module').then(m => {
  //       MyComponent = m.HdWhyBuildtwinModule.HdWhyBuildtwinComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdWhyBuildtwinComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdIntegrationsComp(){
  //   if (this.HdIntegrationsComp) {
  //     this.HdIntegrationsComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../../includes/hd-integrations/hd-integrations.module').then(m => {
  //       MyComponent = m.HdIntegrationsModule.HdIntegrationsComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdIntegrationsComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdTestimonialsComp(){
  //   if (this.HdTestimonialsComp) {
  //     this.HdTestimonialsComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-testimonials/hd-testimonials.module').then(m => {
  //       MyComponent = m.HdTestimonialsModule.HdTestimonialsComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdTestimonialsComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         // instance['RFIMode'] = "true";
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  // async loadHdGoodCompanyComp(){
  //   if (this.HdGoodCompanyComp) {
  //     this.HdGoodCompanyComp.clear();
  //   }
  //   try {
  //     let MyComponent;
  //     import('../hd-good-company/hd-good-company.module').then(m => {
  //       MyComponent = m.HdGoodCompanyModule.HdGoodCompanyComponent();//ele['CreateIssueModule']['ProjectSelectComponent']();
  //       if (MyComponent) {
  //         const factory = this.resolver.resolveComponentFactory(MyComponent);
  //         let componentRef = this.HdGoodCompanyComp.createComponent(factory);
  //         const instance = componentRef.instance;
  //         instance['count'] = 5;
  //         // instance['companySelected'] = this.selectedCompanyName.split('.')[0];
  //       }
  //     });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
 
}