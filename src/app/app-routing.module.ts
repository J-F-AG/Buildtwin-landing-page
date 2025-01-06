import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskHomeComponent } from './pages/Home/help-desk-home/help-desk-home.component';
import { OnlineMeetingHomeComponent } from './pages/co-pilot-for/co-pilot/online-meeting-home/online-meeting-home.component';
import { OnlineMeetingHomeFreelanceComponent } from './pages/co-pilot-for/digital-self-management/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { ProvideServiceComponent } from './pages/marketplace/provide-service/provide-service.component';
import { TimeTrackingHomeComponent } from './pages/marketplace/marketPlace/time-tracking-home/time-tracking-home.component';
import { ElearningSchoolComponent } from './pages/training/training/elearning-school/elearning-school.component';
import { FaqPageTrainingComponent } from './pages/training/faq/faq-page-training/faq-page.component';
import { PricingPageComponent } from './pages/price/pricing-page/pricing-page.component';
import { EmailMarketingHomeComponent } from './pages/whybuildtwin/why-buildtwin/email-marketing-home/email-marketing-home.component';
import { BlogPageComponent } from './pages/whybuildtwin/customer-sucess/blog-page/blog-page.component';
import { FaqPageComponent } from './pages/whybuildtwin/faq/faq-page/faq-page.component';
import { DataSafetyComponent } from './pages/whybuildtwin/data-safety/data-safety.component';
import { IntegrationsPageComponent } from './pages/whybuildtwin/integrations-page/integrations-page.component';
import { ContactPageComponent } from './pages/whybuildtwin/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/whybuildtwin/about-page/about-page.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-safety.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { VenderDetailsAarbeeComponent } from './pages/vender/vender-details-aarbee/vender-details-aarbee.component';
import { BrowseServicesMainComponent } from './pages/browse-services/browse-services-main/browse-services-main.component';
import { ServicesNewComponent } from './pages/services-new/services-new.component';
import { RebarServicesNewComponent } from './pages/rebar/services-new.component';
import { BimServicesNewComponent } from './pages/bim/services-new.component';
import { StructuralSteelServicesNewComponent } from './pages/structural-steel/services-new.component';
import { BimUsaServicesNewComponent } from './pages/bim-usa/services-new.component';
import { SteelDetailingUsaServicesNewComponent } from './pages/steel-detailing-usa/services-new.component';
import { SectorComponent } from './pages/sector/sector.component';
import { BuildingCodeComponent } from './pages/building-code/sector.component';
import { DataCenterSectorComponent } from './pages/sector-data-center/sector.component';
import { BuildingCodeAiscComponent } from './pages/building-code-aisc/sector.component';
import { SectorPowerPlantComponent } from './pages/sector-power-plant/sector.component';




const routes: Routes = [


    {
        path: '', component: HelpDeskHomeComponent,
        data: {
            title: 'Buildtwin | Marketplace for Structural Engineering Services',
            description: 'Buildtwin is a marketplace for structural engineering services in the AEC industry. Connect with pre-qualified vendors, manage projects, and streamline tendering and bidding with our SaaS platform.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com'
        }
    },
    {
        path: 'ai-project-management', component: OnlineMeetingHomeComponent,
        data: {
            title: 'Simplify Structural Engineering Projects with AI Design Manager',
            description: "BuildTwin's AI Design Manager simplifies structural engineering projects with AI assistance at every step. Features collaboration and planning tools. Trusted by over 5,000 engineers",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/ai-project-management'
        }
    },
    {
        path: 'business-intelligence', component: OnlineMeetingHomeFreelanceComponent,
        data: {
            title: 'AI-driven Business Intelligence Platform for AEC Industry | BuildTwin',
            description: "BuildTwin's AI-driven Business Intelligence platform for AEC industry that offers a comprehensive understanding of your technical teams' commercial performance. Gain valuable insights and optimize your operations for success.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/business-intelligence'
        }
    },
    {
        path: 'provide-service', component: ProvideServiceComponent,
        data: {
            title: 'Offer Your Structural Engineering Services Worldwide | Buildtwin',
            description: 'Provide your structural engineering services worldwide with Buildtwin. Access global projects and clients through our trusted platform.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/provide-service'
        }
    },
    {
        path: 'marketplace', component: TimeTrackingHomeComponent,
        data: {
            title: 'BuildTwin: Global AEC Marketplace for Structural Engineering',
            description: 'Connect with global AEC solution providers on BuildTwin. Manage structural engineering projects with our AI platform. Register to bid and post projects today.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/marketplace'
        }
    },
    {
        path: 'training', component: ElearningSchoolComponent,
        data: {
            title: 'Become Eligible for More Projects | BuildTwin Training',
            description: 'Gain skills to bid on new projects with BuildTwin Training. Co-developed by industry leaders, covering software, building codes, technical solutions, and productivity improvements.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/training'
        }
    },
    {
        path: 'good-reason', component: EmailMarketingHomeComponent,
        data: {
            title: 'Why Choose Buildtwin | Efficient Engineering Team Matching',
            description: 'Buildtwin matches engineering teams with pre-qualified vendors. Features include Global Marketplace access, AI Project Management, Specialized Training, and AI-powered Business Intelligence to ensure project success.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/good-reason'
        }
    },
    {
        path: 'use-cases', component: BlogPageComponent,
        data: {
            title: 'Explore Use Cases of BuildTwin for Enhanced Project Outcomes | BuildTwin',
            description: 'BuildTwin transforms project outcomes with innovative use cases. Explore applications across AEC industry for improved efficiency and collaboration.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/use-cases'
        }
    },
    {
        path: 'faq', component: FaqPageComponent,
        data: {
            title: 'Frequently Asked Questions | Buildtwin',
            description: "Find answers to common questions about Buildtwin's structural engineering marketplace, AI project management tools, data safety, integrations, training programs, and more.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/faq'
        }
    },
    {
        path: 'data-safety', component: DataSafetyComponent,
        data: {
            title: 'Data Safety for Structural Engineers | BuildTwin',
            description: "Ensure data safety and compliance with BuildTwin's secure project management platform for structural engineers. Collaborate confidently with our privacy-focused tools.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/data-safety'
        }
    },
    {
        path: 'integrations', component: IntegrationsPageComponent,
        data: {
            title: 'Integrate BuildTwin with Your CDE/ERP Software',
            description: 'Seamlessly connect BuildTwin with your CDE/ERP software. Access tailored solutions designed to enhance your experience and boost productivity.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/integrations'
        }
    },
    {
        path: 'contact', component: ContactPageComponent,
        data: {
            title: 'Contact Us | Buildtwin - Structural Engineering Marketplace',
            description: "Reach out to Buildtwin for any inquiries about our structural engineering services, AI tools, marketplace, integrations, or training. We're here to help you succeed.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/contact'
        }
    },
    {path: 'partners/:id', component: VenderDetailsAarbeeComponent},
    {path: 'about', component: AboutPageComponent,
        data: {
            title: 'BuildTwin Marketplace Helps Engineers and Technical Teams For AEC Projects',
            description: "BuildTwin streamlines structural engineering by automating tasks, improving feedback, and connecting engineers with a global marketplace for vendors and services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/about'
        }
    },

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
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent,
        data: {
            title: 'Privacy Policy | BuildTwin',
            description: "Learn how BuildTwin protects your data. Our Privacy Policy outlines the collection, use, and safeguarding of your information on our platform.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/privacy-policy'
        }
    },
    {path: 'terms-conditions', component: TermsConditionsPageComponent,
        data: {
            title: 'Terms and Conditions | BuildTwin',
            description: "Understand the terms and conditions for using BuildTwin's platform. Explore your rights, responsibilities, and the guidelines for accessing our services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/terms-conditions'
        }
    },
    {path: 'training-faq', component: FaqPageTrainingComponent},
    {path: 'pricing', component: PricingPageComponent},
    // {path: 'engineering-services/services',
    //     redirectTo: '/explore-services',
    //     pathMatch: 'full'
    // },
    {path: 'sector', 
        component: SectorComponent
    },
    {path: 'building-code',
        component: BuildingCodeComponent
    },
    {path: 'building-code/aisc', component: BuildingCodeAiscComponent,
        data: {
            title: 'Find AISC-Compliant Service Providers for Your Next Project',
            description: 'Explore the importance of the AISC Building Code for safe, durable, and efficient steel construction. Connect with AISC-compliant service providers on BuildTwin',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/building-code/aisc'
        }
    },
    {path: 'sector/data-centre', component: DataCenterSectorComponent,
        data: {
            title: 'Connect with Expert Data Center Designers | BuildTwin Marketplace',
            description: 'Unlock expert data center construction solutions with BuildTwin. From modular to hyperscale data centers, we offer tailored design, compliance, and management with a global vendor network.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/data-centre'
        }
    },
    {path: 'sector/power-plant', component: SectorPowerPlantComponent,
        data: {
            title: 'Connect with Expert Power Plant Engineering Designers | BuildTwin Marketplace',
            description: 'Connecting Global Expertise with Advanced ERP Solutions for Power Plant Design and Development',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/power-plant'
        }
    },
    {path: 'explore-services', component: BrowseServicesMainComponent,
        data: {
            title: 'Find Top Structural Engineering Services | BuildTwin',
            description: 'Connect with top structural engineering service providers on BuildTwin. Collaborate globally on  precast detailing, BIM modeling, 3D rebar, structural design, and more.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/explore-services'
        }
    },
    {
        path: 'services/pre-cast-detailing-services', component: ServicesNewComponent,
        data: {
            title: 'Precast Detailing Services by Pre-Qualified Vendors | BuildTwin',
            description: "Streamline your projects with BuildTwin's precast detailing services. Select from hundreds of pre-qualified vendors, monitor progress live, and receive internationally compliant drawings",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/pre-cast-detailing-services'
        }
    },

    {
        path: 'services/rebar-detailing-services', component: RebarServicesNewComponent,
        data: {
            title: 'Rebar Detailing Services | Shop Drawings, 3D Modeling and Footing Detail',
            description: "Buildtwin offers rebar detailing services from pre-qualified vendors, including rebar shop drawings, 3D modeling, footing detail, and bar bending schedules for all your construction needs.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/rebar-detailing-services'
        }
    },

    {
        path: 'services/bim-services', component: BimServicesNewComponent,
        data: {
            title: 'BIM (Building Information Modeling) Services For AEC Projects | BuildTwin',
            description: "BuildTwin Marketplace offers comprehensive BIM services to streamline your AEC projects. Our services include BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM. Let us help you transform your project with our top-notch BIM services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-services'
        }
    },

    {
        path: 'services/steel-detailing-services', component: StructuralSteelServicesNewComponent,
        data: {
            title: 'Structural Steel Detailing Services for AEC Project | BuildTwin',
            description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects. Our services include shop drawings, erection drawings, 2D and 3D modelling, connection design, and miscellaneous steel detailing.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services'
        }
    },

    {
        path: 'services/bim-service-provider-in-usa', component: BimUsaServicesNewComponent,
        data: {
            title: 'Connect with BIM Modeling Services Providers for AEC Projects Across the USA | BuildTwin',
            description: "Connect top-tier BIM service providers across the USA. Our BIM services provider specialize in BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-service-provider-in-usa'
        }
    },

    {
        path: 'services/steel-detailing-services-in-usa', component: SteelDetailingUsaServicesNewComponent,
        data: {
            title: 'Structural Steel Detailing Vendors from USA for AEC Projects',
            description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects in the USA. Our services include shop drawings, erection drawings, 2D and 3D modeling, connection design, and miscellaneous steel detailing.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services-in-usa'
        }
    },

    { path: 'notfound', component: ComingSoonComponent },


    // {
    //     path: 'de', component: HelpDeskHomeComponent,
    //     data: {
    //         title: 'Buildtwin | Marketplace for Structural Engineering Services',
    //         description: 'Buildtwin is a marketplace for structural engineering services in the AEC industry. Connect with pre-qualified vendors, manage projects, and streamline tendering and bidding with our SaaS platform.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com'
    //     }
    // },
    // {
    //     path: 'de/ai-project-management', component: OnlineMeetingHomeComponent,
    //     data: {
    //         title: 'Simplify Structural Engineering Projects with AI Design Manager',
    //         description: "BuildTwin's AI Design Manager simplifies structural engineering projects with AI assistance at every step. Features collaboration and planning tools. Trusted by over 5,000 engineers",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/ai-project-management'
    //     }
    // },
    // {
    //     path: 'de/business-intelligence', component: OnlineMeetingHomeFreelanceComponent,
    //     data: {
    //         title: 'AI-driven Business Intelligence Platform for AEC Industry | BuildTwin',
    //         description: "BuildTwin's AI-driven Business Intelligence platform for AEC industry that offers a comprehensive understanding of your technical teams' commercial performance. Gain valuable insights and optimize your operations for success.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/business-intelligence'
    //     }
    // },
    // {
    //     path: 'de/provide-service', component: ProvideServiceComponent,
    //     data: {
    //         title: 'Offer Your Structural Engineering Services Worldwide | Buildtwin',
    //         description: 'Provide your structural engineering services worldwide with Buildtwin. Access global projects and clients through our trusted platform.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/provide-service'
    //     }
    // },
    // {
    //     path: 'de/marketplace', component: TimeTrackingHomeComponent,
    //     data: {
    //         title: 'BuildTwin: Global AEC Marketplace for Structural Engineering',
    //         description: 'Connect with global AEC solution providers on BuildTwin. Manage structural engineering projects with our AI platform. Register to bid and post projects today.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/marketplace'
    //     }
    // },
    // {
    //     path: 'de/training', component: ElearningSchoolComponent,
    //     data: {
    //         title: 'Become Eligible for More Projects | BuildTwin Training',
    //         description: 'Gain skills to bid on new projects with BuildTwin Training. Co-developed by industry leaders, covering software, building codes, technical solutions, and productivity improvements.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/training'
    //     }
    // },
    // {
    //     path: 'de/good-reason', component: EmailMarketingHomeComponent,
    //     data: {
    //         title: 'Why Choose Buildtwin | Efficient Engineering Team Matching',
    //         description: 'Buildtwin matches engineering teams with pre-qualified vendors. Features include Global Marketplace access, AI Project Management, Specialized Training, and AI-powered Business Intelligence to ensure project success.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/good-reason'
    //     }
    // },
    // {
    //     path: 'de/use-cases', component: BlogPageComponent,
    //     data: {
    //         title: 'Explore Use Cases of BuildTwin for Enhanced Project Outcomes | BuildTwin',
    //         description: 'BuildTwin transforms project outcomes with innovative use cases. Explore applications across AEC industry for improved efficiency and collaboration.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/use-cases'
    //     }
    // },
    // {
    //     path: 'de/faq', component: FaqPageComponent,
    //     data: {
    //         title: 'Frequently Asked Questions | Buildtwin',
    //         description: "Find answers to common questions about Buildtwin's structural engineering marketplace, AI project management tools, data safety, integrations, training programs, and more.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/faq'
    //     }
    // },
    // {
    //     path: 'de/data-safety', component: DataSafetyComponent,
    //     data: {
    //         title: 'Data Safety for Structural Engineers | BuildTwin',
    //         description: "Ensure data safety and compliance with BuildTwin's secure project management platform for structural engineers. Collaborate confidently with our privacy-focused tools.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/data-safety'
    //     }
    // },
    // {
    //     path: 'de/integrations', component: IntegrationsPageComponent,
    //     data: {
    //         title: 'Integrate BuildTwin with Your CDE/ERP Software',
    //         description: 'Seamlessly connect BuildTwin with your CDE/ERP software. Access tailored solutions designed to enhance your experience and boost productivity.',
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/integrations'
    //     }
    // },
    // {
    //     path: 'de/contact', component: ContactPageComponent,
    //     data: {
    //         title: 'Contact Us | Buildtwin - Structural Engineering Marketplace',
    //         description: "Reach out to Buildtwin for any inquiries about our structural engineering services, AI tools, marketplace, integrations, or training. We're here to help you succeed.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/contact'
    //     }
    // },
    // {path: 'de/about', component: AboutPageComponent,
        // data: {
        //     title: 'BuildTwin Marketplace Helps Engineers and Technical Teams For AEC Projects',
        //     description: "BuildTwin streamlines structural engineering by automating tasks, improving feedback, and connecting engineers with a global marketplace for vendors and services.",
        //     image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
        //     canonical: 'https://www.buildtwin.com/about'
        // }
    // },
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
    // {path: 'de/privacy-policy', component: PrivacyPolicyPageComponent,
        // data: {
        //     title: 'Privacy Policy | BuildTwin',
        //     description: "Learn how BuildTwin protects your data. Our Privacy Policy outlines the collection, use, and safeguarding of your information on our platform.",
        //     image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
        //     canonical: 'https://www.buildtwin.com/privacy-policy'
        // }
    // },
    // {path: 'de/terms-conditions', component: TermsConditionsPageComponent,
        // data: {
        //     title: 'Terms and Conditions | BuildTwin',
        //     description: "Understand the terms and conditions for using BuildTwin's platform. Explore your rights, responsibilities, and the guidelines for accessing our services.",
        //     image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
        //     canonical: 'https://www.buildtwin.com/terms-conditions'
        // }
    // },
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
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/explore-services'
    //     }
    // },
    // {
    //     path: 'de/services/pre-cast-detailing-services', component: ServicesNewComponent,
    //     data: {
    //         title: 'Precast Detailing Services by Pre-Qualified Vendors | BuildTwin',
    //         description: "Streamline your projects with BuildTwin's precast detailing services. Select from hundreds of pre-qualified vendors, monitor progress live, and receive internationally compliant drawings",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/services/pre-cast-detailing-services'
    //     }
    // },

    // {
    //     path: 'de/services/rebar-detailing-services', component: RebarServicesNewComponent,
    //     data: {
    //         title: 'Rebar Detailing Services | Shop Drawings, 3D Modeling and Footing Detail',
    //         description: "Buildtwin offers rebar detailing services from pre-qualified vendors, including rebar shop drawings, 3D modeling, footing detail, and bar bending schedules for all your construction needs.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/services/rebar-detailing-services'
    //     }
    // },

    // {
    //     path: 'de/services/bim-services', component: BimServicesNewComponent,
    //     data: {
    //         title: 'BIM (Building Information Modeling) Services For AEC Projects | BuildTwin',
    //         description: "BuildTwin Marketplace offers comprehensive BIM services to streamline your AEC projects. Our services include BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM. Let us help you transform your project with our top-notch BIM services.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/services/bim-services'
    //     }
    // },

    // {
    //     path: 'de/services/steel-detailing-services', component: StructuralSteelServicesNewComponent,
    //     data: {
    //         title: 'Structural Steel Detailing Services for AEC Project | BuildTwin',
    //         description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects. Our services include shop drawings, erection drawings, 2D and 3D modelling, connection design, and miscellaneous steel detailing.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/services/steel-detailing-services'
    //     }
    // },

    // {
    //     path: 'de/services/bim-service-provider-in-usa', component: BimUsaServicesNewComponent,
    //     data: {
    //         title: 'Connect with BIM Modeling Services Providers for AEC Projects Across the USA | BuildTwin',
    //         description: "Connect top-tier BIM service providers across the USA. Our BIM services provider specialize in BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM.",
    //         image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
    //         canonical: 'https://www.buildtwin.com/services/bim-service-provider-in-usa'
    //     }
    // },

    // {
    //     path: 'de/services/steel-detailing-services-in-usa', component: SteelDetailingUsaServicesNewComponent,
    //     data: {
    //         title: 'Structural Steel Detailing Vendors from USA for AEC Projects',
    //         description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects in the USA. Our services include shop drawings, erection drawings, 2D and 3D modeling, connection design, and miscellaneous steel detailing.",
    //         image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
    //         canonical: 'https://www.buildtwin.com/services/steel-detailing-services-in-usa'
    //     }
    // },

    // { path: 'de/notfound', component: ComingSoonComponent },


    // {path: '**', component: ComingSoonComponent} 
    // {
    //     path: '**', redirectTo: '/notfound',
    //     pathMatch: 'full'
    // }
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