import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskHomeComponent } from './pages/Home/help-desk-home/help-desk-home.component';
import { OnlineMeetingHomeComponent } from './pages/co-pilot-for/co-pilot/online-meeting-home/online-meeting-home.component';
import { OnlineMeetingHomeFreelanceComponent } from './pages/co-pilot-for/digital-self-management/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { ProvideServiceComponent } from './pages/marketplace/provide-service/provide-service.component';
import { TimeTrackingHomeComponent } from './pages/marketplace/marketPlace/time-tracking-home/time-tracking-home.component';
import { ElearningSchoolComponent } from './pages/training/training/elearning-school/elearning-school.component';
import { EventsComponent } from './pages/training/events/events/events.component';
import { FaqPageTrainingComponent } from './pages/training/faq/faq-page-training/faq-page.component';
import { PricingPageComponent } from './pages/price/pricing-page/pricing-page.component';
import { EmailMarketingHomeComponent } from './pages/whybuildtwin/why-buildtwin/email-marketing-home/email-marketing-home.component';
import { BlogPageComponent } from './pages/whybuildtwin/customer-sucess/blog-page/blog-page.component';
import { FaqPageComponent } from './pages/whybuildtwin/faq/faq-page/faq-page.component';
import { DataSafetyComponent } from './pages/whybuildtwin/data-safety/data-safety.component';
import { IntegrationsPageComponent } from './pages/whybuildtwin/integrations-page/integrations-page.component';
import { ContactPageComponent } from './pages/whybuildtwin/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/whybuildtwin/about-page/about-page.component';
import { VenderDetailsComponent } from './pages/vender/vender-details/vender-details.component';
import { CoursesDetailsStyleOneComponent } from './pages/training/training/sub-page/courses-details-style-one/courses-details-style-one.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-safety.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { VenderDetailsSublimeComponent } from './pages/vender/vender-details-sublime/vender-details-sublime.component';
import { VenderDetailsCaldimComponent } from './pages/vender/vender-details-caldim/vender-details-caldim.component';
import { VenderDetailsMoldtekComponent } from './pages/vender/vender-details-moldtek/vender-details-moldtek.component';
import { VenderDetailsAarbeeComponent } from './pages/vender/vender-details-aarbee/vender-details-aarbee.component';
import { VenderDetailsAlliedComponent } from './pages/vender/vender-details-allied/vender-details-allied.component';
import { VenderDetailsAarbeeOldComponent } from './pages/vender/vender-details-aarbee2/vender-details-aarbee.component';
import { VenderDetailsUiComponent } from './pages/vender/vender-details-ui/vender-details-ui.component';
import { ServicesComponent } from './pages/Services/services/services.component';
import { SectorComponent } from './pages/sector/sector.component';
import { BrowseServicesMainComponent } from './pages/browse-services/browse-services-main/browse-services-main.component';
import { ServicesNewComponent } from './pages/services-new/services-new.component';
import { RebarServicesNewComponent } from './pages/rebar/services-new.component';
import { BimServicesNewComponent } from './pages/bim/services-new.component';
import { StructuralSteelServicesNewComponent } from './pages/structural-steel/services-new.component';
import { BimUsaServicesNewComponent } from './pages/bim-usa/services-new.component';




const routes: Routes = [

    
    {path: '', component: HelpDeskHomeComponent,
    data: {
        title: 'Buildtwin | Marketplace for Structural Engineering Services',
        description: 'Buildtwin is a marketplace for structural engineering services in the AEC industry. Connect with pre-qualified vendors, manage projects, and streamline tendering and bidding with our SaaS platform.',
        image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
        canonical: 'https://www.buildtwin.com'
      }
    },
    //  {path: 'de', component: HelpDeskHomeComponent,
    // data: {
    //     title: 'Buildtwin | Marketplace for Structural Engineering Services',
    //     description: 'Buildtwin is a marketplace for structural engineering services in the AEC industry. Connect with pre-qualified vendors, manage projects, and streamline tendering and bidding with our SaaS platform."',
    //     image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //   }
    // },
    // {path: 'en', component: HelpDeskHomeComponent},

    
    {path: 'AI-project-management', component: OnlineMeetingHomeComponent,
        data: {
            title: 'Simplify Structural Engineering Projects with AI Design Manager',
            description: "BuildTwin's AI Design Manager simplifies structural engineering projects with AI assistance at every step. Features collaboration and planning tools. Trusted by over 5,000 engineers",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/AI-project-management'
        }
    },
    {path: 'business-intelligence', component: OnlineMeetingHomeFreelanceComponent,
        data: {
            title: 'AI-driven Business Intelligence Platform for AEC Industry | BuildTwin',
            description: "BuildTwin's AI-driven Business Intelligence platform for AEC industry that offers a comprehensive understanding of your technical teams' commercial performance. Gain valuable insights and optimize your operations for success.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/business-intelligence'
        }
    },
    {path: 'provide-service', component: ProvideServiceComponent,
        data: {
            title: 'Offer Your Structural Engineering Services Worldwide | Buildtwin',
            description: 'Provide your structural engineering services worldwide with Buildtwin. Access global projects and clients through our trusted platform.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/provide-service'
        }
    },
    {path: 'marketplace', component: TimeTrackingHomeComponent,
        data: {
            title: 'BuildTwin: Global AEC Marketplace for Structural Engineering',
            description: 'Connect with global AEC solution providers on BuildTwin. Manage structural engineering projects with our AI platform. Register to bid and post projects today.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/marketplace'
        }
    },
    {path: 'training', component: ElearningSchoolComponent,
        data: {
            title: 'Become Eligible for More Projects | BuildTwin Training',
            description: 'Gain skills to bid on new projects with BuildTwin Training. Co-developed by industry leaders, covering software, building codes, technical solutions, and productivity improvements.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/training'
        }
    }, 
    {path: 'good-reason', component: EmailMarketingHomeComponent,
        data: {
            title: 'Why Choose Buildtwin | Efficient Engineering Team Matching',
            description: 'Buildtwin matches engineering teams with pre-qualified vendors. Features include Global Marketplace access, AI Project Management, Specialized Training, and AI-powered Business Intelligence to ensure project success.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/good-reason'
        }
    }, 
    {path: 'use-cases', component: BlogPageComponent,
        data: {
            title: 'Explore Use Cases of BuildTwin for Enhanced Project Outcomes | BuildTwin',
            description: 'BuildTwin transforms project outcomes with innovative use cases. Explore applications across AEC industry for improved efficiency and collaboration.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/use-cases'
        }
    },
    {path: 'faq', component: FaqPageComponent,
        data: {
            title: 'Frequently Asked Questions | Buildtwin',
            description: "Find answers to common questions about Buildtwin's structural engineering marketplace, AI project management tools, data safety, integrations, training programs, and more.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/faq'
        }
    },
    {path: 'data-safety', component: DataSafetyComponent,
        data: {
            title: 'Data Safety for Structural Engineers | BuildTwin',
            description: "Ensure data safety and compliance with BuildTwin's secure project management platform for structural engineers. Collaborate confidently with our privacy-focused tools.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/data-safety'
        }
    },
    {path: 'integrations', component: IntegrationsPageComponent,
        data: {
            title: 'Integrate BuildTwin with Your CDE/ERP Software',
            description: 'Seamlessly connect BuildTwin with your CDE/ERP software. Access tailored solutions designed to enhance your experience and boost productivity.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/integrations'
        }
    },
    {path: 'contact', component: ContactPageComponent,
        data: {
            title: 'Contact Us | Buildtwin - Structural Engineering Marketplace',
            description: "Reach out to Buildtwin for any inquiries about our structural engineering services, AI tools, marketplace, integrations, or training. We're here to help you succeed.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/contact'
        }
    },
    {path: 'partners/:id', component: VenderDetailsAarbeeComponent},
    {path: 'about', component: AboutPageComponent},

    // {path: 'vender-details', component: VenderDetailsComponent},
    // {path: 'events', component: EventsComponent},
    // {path: 'vender-details-sublimestructures', component: VenderDetailsSublimeComponent},
    // {path: 'vender-details-caldim', component: VenderDetailsCaldimComponent},
    // {path: 'vender-details-moldtek', component: VenderDetailsMoldtekComponent},
    // {path: 'vender-details-aarbee', component: VenderDetailsAarbeeComponent},
    // {path: 'vender-details-ui', component: VenderDetailsUiComponent},
    // {path: 'details', component: VenderDetailsAarbeeOldComponent},
    // {path: 'vender-details-allied', component: VenderDetailsAlliedComponent},
    // {path: 'courses-sample', component: CoursesDetailsStyleOneComponent},
    
    {path: 'terms-of-service', component: DataPrivacyComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'training-faq', component: FaqPageTrainingComponent},
    {path: 'pricing', component: PricingPageComponent},
    // {path: 'engineering-services/services',
    //     redirectTo: '/explore-services',
    //     pathMatch: 'full'
    // },
    // {path: 'engineering-services/sector',
    //     redirectTo: '/',
    //     pathMatch: 'full'
    // },
    {path: 'explore-services', component: BrowseServicesMainComponent,
        data: {
            title: 'Find Top Structural Engineering Services | BuildTwin',
            description: 'Connect with top structural engineering service providers on BuildTwin. Collaborate globally on  precast detailing, BIM modeling, 3D rebar, structural design, and more.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/explore-services'
        }
    },
    {path: 'services/pre-cast-detailing-services', component: ServicesNewComponent,
        data: {
            title: 'Precast Detailing Services by Pre-Qualified Vendors | BuildTwin',
            description: "Streamline your projects with BuildTwin's precast detailing services. Select from hundreds of pre-qualified vendors, monitor progress live, and receive internationally compliant drawings",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/pre-cast-detailing-services'
        }
    },

    {path: 'services/rebar-detailing-services', component: RebarServicesNewComponent,
        data: {
            title: 'Rebar Detailing Services | Shop Drawings, 3D Modeling and Footing Detail',
            description: "Buildtwin offers rebar detailing services from pre-qualified vendors, including rebar shop drawings, 3D modeling, footing detail, and bar bending schedules for all your construction needs.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/rebar-detailing-services'
        }
    },

    {path: 'services/bim-services', component: BimServicesNewComponent,
        data: {
            title: 'BIM (Building Information Modeling) Services For AEC Projects | BuildTwin',
            description: "BuildTwin Marketplace offers comprehensive BIM services to streamline your AEC projects. Our services include BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM. Let us help you transform your project with our top-notch BIM services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-services'
        }
    },

    {path: 'services/steel-detailing-services', component: StructuralSteelServicesNewComponent,
        data: {
            title: 'Structural Steel Detailing Services for AEC Project | BuildTwin',
            description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects. Our services include shop drawings, erection drawings, 2D and 3D modelling, connection design, and miscellaneous steel detailing.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services'
        }
    },

    {path: 'services/bim-service-provider-in-usa', component: BimUsaServicesNewComponent,
        data: {
            title: 'BIM Services USA | BIM Outsourcing Companies USA - BuildTwin Marketplace',
            description: "BuildTwin Marketplace is your trusted BIM services provider in USA. Our expert team offers comprehensive BIM consulting and outsourcing solutions to optimize your AEC projects. We deliver quality results across New York, Florida, Chicago, Texas, and nearby areas.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-service-provider-in-usa'
        }
    },
    
    // {path: 'de/AI-project-management', component: OnlineMeetingHomeComponent,
    //     data: {
    //         title: 'Simplify Structural Engineering Projects with AI Design Manager',
    //         description: "BuildTwin's AI Design Manager simplifies structural engineering projects with AI assistance at every step. Features collaboration and planning tools. Trusted by over 5,000 engineers",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/business-intelligence', component: OnlineMeetingHomeFreelanceComponent,
    //     data: {
    //         title: 'AI-driven Business Intelligence Platform for AEC Industry | BuildTwin',
    //         description: "BuildTwin's AI-driven Business Intelligence platform for AEC industry that offers a comprehensive understanding of your technical teams' commercial performance. Gain valuable insights and optimize your operations for success.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/provide-service', component: ProvideServiceComponent,
    //     data: {
    //         title: 'Offer Your Structural Engineering Services Worldwide | Buildtwin',
    //         description: 'Provide your structural engineering services worldwide with Buildtwin. Access global projects and clients through our trusted platform.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/marketplace', component: TimeTrackingHomeComponent,
    //     data: {
    //         title: 'BuildTwin: Global AEC Marketplace for Structural Engineering',
    //         description: 'Connect with global AEC solution providers on BuildTwin. Manage structural engineering projects with our AI platform. Register to bid and post projects today.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/training', component: ElearningSchoolComponent,
    //     data: {
    //         title: 'Become Eligible for More Projects | BuildTwin Training',
    //         description: 'Gain skills to bid on new projects with BuildTwin Training. Co-developed by industry leaders, covering software, building codes, technical solutions, and productivity improvements.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // }, 
    // {path: 'de/events', component: EventsComponent},
    // {path: 'de/training-faq', component: FaqPageTrainingComponent},
    // {path: 'de/pricing', component: PricingPageComponent},
    // {path: 'de/good-reason', component: EmailMarketingHomeComponent,
    //     data: {
    //         title: 'Why Choose Buildtwin | Efficient Engineering Team Matching',
    //         description: 'Buildtwin matches engineering teams with pre-qualified vendors. Features include Global Marketplace access, AI Project Management, Specialized Training, and AI-powered Business Intelligence to ensure project success.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // }, 
    // {path: 'de/use-cases', component: BlogPageComponent,
    //     data: {
    //         title: 'Explore Use Cases of BuildTwin for Enhanced Project Outcomes | BuildTwin',
    //         description: 'BuildTwin transforms project outcomes with innovative use cases. Explore applications across AEC industry for improved efficiency and collaboration.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/faq', component: FaqPageComponent,
    //     data: {
    //         title: 'Frequently Asked Questions | Buildtwin',
    //         description: "Find answers to common questions about Buildtwin's structural engineering marketplace, AI project management tools, data safety, integrations, training programs, and more.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/data-safety', component: DataSafetyComponent,
    //     data: {
    //         title: 'Data Safety for Structural Engineers | BuildTwin',
    //         description: "Ensure data safety and compliance with BuildTwin's secure project management platform for structural engineers. Collaborate confidently with our privacy-focused tools.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/integrations', component: IntegrationsPageComponent,
    //     data: {
    //         title: 'Integrate BuildTwin with Your CDE/ERP Software',
    //         description: 'Seamlessly connect BuildTwin with your CDE/ERP software. Access tailored solutions designed to enhance your experience and boost productivity.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/contact', component: ContactPageComponent,
    //     data: {
    //         title: 'Contact Us | Buildtwin - Structural Engineering Marketplace',
    //         description: "Reach out to Buildtwin for any inquiries about our structural engineering services, AI tools, marketplace, integrations, or training. We're here to help you succeed.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/about', component: AboutPageComponent},
    // {path: 'de/vender-details', component: VenderDetailsComponent},
    // {path: 'de/vender-details-sublimestructures', component: VenderDetailsSublimeComponent},
    // {path: 'de/vender-details-caldim', component: VenderDetailsCaldimComponent},
    // {path: 'de/vender-details-moldtek', component: VenderDetailsMoldtekComponent},
    // {path: 'de/partners/:id', component: VenderDetailsAarbeeComponent},
    // {path: 'de/vender-details-ui', component: VenderDetailsUiComponent},
    // {path: 'de/details', component: VenderDetailsAarbeeOldComponent},
    // {path: 'de/vender-details-allied', component: VenderDetailsAlliedComponent},
    // {path: 'de/courses-sample', component: CoursesDetailsStyleOneComponent},
    // {path: 'de/terms-of-service', component: DataPrivacyComponent},
    // {path: 'de/privacy-policy', component: PrivacyPolicyPageComponent},
    // {path: 'de/terms-conditions', component: TermsConditionsPageComponent},
    // {path: 'de/engineering-services/services',
    //     redirectTo: '/de/explore-services',
    //     pathMatch: 'full'
    // },
    // {path: 'de/engineering-services/sector',
    //     redirectTo: '/de',
    //     pathMatch: 'full'
    // },
    // {path: 'de/explore-services', component: BrowseServicesMainComponent,
    //     data: {
    //         title: 'Find Top Structural Engineering Services | BuildTwin',
    //         description: 'Connect with top structural engineering service providers on BuildTwin. Collaborate globally on  precast detailing, BIM modeling, 3D rebar, structural design, and more.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/services/pre-cast-detailing-services', component: ServicesNewComponent,
    //     data: {
    //         title: 'Precast Detailing Services by Pre-Qualified Vendors | BuildTwin',
    //         description: "Streamline your projects with BuildTwin's precast detailing services. Select from hundreds of pre-qualified vendors, monitor progress live, and receive internationally compliant drawings",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/services/rebar-detailing-services', component: RebarServicesNewComponent,
    //     data: {
    //         title: 'Rebar Detailing Services | Shop Drawings, 3D Modeling and Footing Detail',
    //         description: "Buildtwin offers rebar detailing services from pre-qualified vendors, including rebar shop drawings, 3D modeling, footing detail, and bar bending schedules for all your construction needs.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/services/bim-services', component: BimServicesNewComponent,
    //     data: {
    //         title: 'BIM (Building Information Modeling) Services For AEC Projects | BuildTwin',
    //         description: "BuildTwin Marketplace offers comprehensive BIM services to streamline your AEC projects. Our services include BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM. Let us help you transform your project with our top-notch BIM services.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },

    // {path: 'de/services/steel-detailing-services', component: StructuralSteelServicesNewComponent,
    //     data: {
    //         title: 'Structural Steel Detailing Services for AEC Project | BuildTwin',
    //         description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects. Our services include shop drawings, erection drawings, 2D and 3D modelling, connection design, and miscellaneous steel detailing.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg'
    //     }
    // },
    // {path: 'de/services/bim-service-provider-in-usa', component: BimUsaServicesNewComponent,
    //     data: {
    //         title: 'Connect with BIM modeling Service provider vendors in USA',
    //         description: "BuildTwin Marketplace offers comprehensive BIM modeling services​ to streamline AEC projects in USA, Arizona, California, Florida, Pennsylvania, Texas, New York, Boston, Los Angeles, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, Near Me. Our services include BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM. Let us help you transform your project with our top-notch BIM services.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/services/bim-service-provider-in-usa'
    //     }
    // },     
    // :lang(de|fr)

    {path: 'notfound', component: ComingSoonComponent},


    // {path: '**', component: ComingSoonComponent} 
    {path: '**', redirectTo: '/notfound',
        pathMatch: 'full'} 
];

@NgModule({
    imports: [
            RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled', // This enables automatic scroll restoration
            anchorScrolling: 'enabled', // This enables anchor scrolling
            scrollOffset: [0, 64] // Optional: Adjust offset if you have a fixed header
          })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }