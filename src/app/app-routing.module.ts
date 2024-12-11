import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';




const routes: Routes = [


    {
        path: '',
        loadChildren: () => import('./pages/Home/help-desk-home/help-desk-home.module').then(m => m.HelpDeskHomeModule),
        // component: HelpDeskHomeComponent,
        data: {
            title: 'Buildtwin | Marketplace for Structural Engineering Services',
            description: 'Buildtwin is a marketplace for structural engineering services in the AEC industry. Connect with pre-qualified vendors, manage projects, and streamline tendering and bidding with our SaaS platform.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com'
        }
    },
    {
        path: 'ai-project-management',
        loadChildren: () => import('./pages/co-pilot-for/co-pilot/online-meeting-home/online-meeting-home.module').then(m => m.OnlineMeetingHomeModule),
        // component: OnlineMeetingHomeComponent,
        data: {
            title: 'Simplify Structural Engineering Projects with AI Design Manager',
            description: "BuildTwin's AI Design Manager simplifies structural engineering projects with AI assistance at every step. Features collaboration and planning tools. Trusted by over 5,000 engineers",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/ai-project-management'
        }
    },
    {
        path: 'business-intelligence',
        loadChildren: () => import('./pages/co-pilot-for/digital-self-management/online-meeting-home-freelance/online-meeting-home-freelance.module').then(m => m.OnlineMeetingHomeFreelanceModule),
        // component: OnlineMeetingHomeFreelanceComponent,
        data: {
            title: 'AI-driven Business Intelligence Platform for AEC Industry | BuildTwin',
            description: "BuildTwin's AI-driven Business Intelligence platform for AEC industry that offers a comprehensive understanding of your technical teams' commercial performance. Gain valuable insights and optimize your operations for success.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/business-intelligence'
        }
    },
    {
        path: 'provide-service',
        loadChildren: () => import('./pages/marketplace/provide-service/provide-service.module').then(m => m.ProvideServiceModule),
        // component: ProvideServiceComponent,
        data: {
            title: 'Offer Your Structural Engineering Services Worldwide | Buildtwin',
            description: 'Provide your structural engineering services worldwide with Buildtwin. Access global projects and clients through our trusted platform.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/provide-service'
        }
    },
    {
        path: 'marketplace',
        loadChildren: () => import('./pages/marketplace/marketPlace/time-tracking-home/time-tracking-home.module').then(m => m.TimeTrackingHomeModule),
        // component: TimeTrackingHomeComponent,
        data: {
            title: 'BuildTwin: Global AEC Marketplace for Structural Engineering',
            description: 'Connect with global AEC solution providers on BuildTwin. Manage structural engineering projects with our AI platform. Register to bid and post projects today.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/marketplace'
        }
    },
    {
        path: 'training',
        loadChildren: () => import('./pages/training/training/elearning-school/elearning-school.module').then(m => m.ElearningSchoolModule),
        // component: ElearningSchoolComponent,
        data: {
            title: 'Become Eligible for More Projects | BuildTwin Training',
            description: 'Gain skills to bid on new projects with BuildTwin Training. Co-developed by industry leaders, covering software, building codes, technical solutions, and productivity improvements.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/training'
        }
    },
    {
        path: 'good-reason',
        loadChildren: () => import('./pages/whybuildtwin/why-buildtwin/email-marketing-home/email-marketing-home.module').then(m => m.EmailMarketingHomeModule),
        // component: EmailMarketingHomeComponent,
        data: {
            title: 'Why Choose Buildtwin | Efficient Engineering Team Matching',
            description: 'Buildtwin matches engineering teams with pre-qualified vendors. Features include Global Marketplace access, AI Project Management, Specialized Training, and AI-powered Business Intelligence to ensure project success.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/good-reason'
        }
    },
    {
        path: 'use-cases',
        loadChildren: () => import('./pages/whybuildtwin/customer-sucess/blog-page/blog-page.module').then(m => m.BlogPageModule),
        // component: BlogPageComponent,
        data: {
            title: 'Explore Use Cases of BuildTwin for Enhanced Project Outcomes | BuildTwin',
            description: 'BuildTwin transforms project outcomes with innovative use cases. Explore applications across AEC industry for improved efficiency and collaboration.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/use-cases'
        }
    },
    {
        path: 'faq',
        loadChildren: () => import('./pages/whybuildtwin/faq/faq-page/faq-page.module').then(m => m.FaqPageModule),
        // component: FaqPageComponent,
        data: {
            title: 'Frequently Asked Questions | Buildtwin',
            description: "Find answers to common questions about Buildtwin's structural engineering marketplace, AI project management tools, data safety, integrations, training programs, and more.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/faq'
        }
    },
    {
        path: 'data-safety',
        loadChildren: () => import('./pages/whybuildtwin/data-safety/data-safety.module').then(m => m.DataSafetyModule),
        // component: DataSafetyComponent,
        data: {
            title: 'Data Safety for Structural Engineers | BuildTwin',
            description: "Ensure data safety and compliance with BuildTwin's secure project management platform for structural engineers. Collaborate confidently with our privacy-focused tools.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/data-safety'
        }
    },
    {
        path: 'integrations',
        loadChildren: () => import('./pages/whybuildtwin/integrations-page/integrations-page.module').then(m => m.IntegrationsPageModule),
        // component: IntegrationsPageComponent,
        data: {
            title: 'Integrate BuildTwin with Your CDE/ERP Software',
            description: 'Seamlessly connect BuildTwin with your CDE/ERP software. Access tailored solutions designed to enhance your experience and boost productivity.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/integrations'
        }
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/whybuildtwin/contact-page/contact-page.module').then(m => m.ContactPageModule),
        // component: ContactPageComponent,
        data: {
            title: 'Contact Us | Buildtwin - Structural Engineering Marketplace',
            description: "Reach out to Buildtwin for any inquiries about our structural engineering services, AI tools, marketplace, integrations, or training. We're here to help you succeed.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/contact'
        }
    },
    {
        path: 'partners/:id',
        loadChildren: () => import('./pages/vender/vender-details-aarbee/vender-details-aarbee.module').then(m => m.VenderDetailsAarbeeModule),
        // component: VenderDetailsAarbeeComponent
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/whybuildtwin/about-page/about-page.module').then(m => m.AboutPageModule),
        // component: AboutPageComponent,
        data: {
            title: 'BuildTwin Marketplace Helps Engineers and Technical Teams For AEC Projects',
            description: "BuildTwin streamlines structural engineering by automating tasks, improving feedback, and connecting engineers with a global marketplace for vendors and services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/about'
        }
    },

    {
        path: 'terms-of-service',
        loadChildren: () => import('./pages/data-privacy/data-safety.module').then(m => m.DataPrivacyModule),
        // component: DataPrivacyComponent
    },
    {
        path: 'privacy-policy',
        loadChildren: () => import('./pages/privacy-policy-page/privacy-policy-page.module').then(m => m.PrivacyPolicyPageModule),
        // component: PrivacyPolicyPageComponent,
        data: {
            title: 'Privacy Policy | BuildTwin',
            description: "Learn how BuildTwin protects your data. Our Privacy Policy outlines the collection, use, and safeguarding of your information on our platform.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/privacy-policy'
        }
    },
    {
        path: 'terms-conditions',
        loadChildren: () => import('./pages/terms-conditions-page/terms-conditions-page.module').then(m => m.TermsConditionsPageModule),
        // component: TermsConditionsPageComponent,
        data: {
            title: 'Terms and Conditions | BuildTwin',
            description: "Understand the terms and conditions for using BuildTwin's platform. Explore your rights, responsibilities, and the guidelines for accessing our services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/terms-conditions'
        }
    },
    {
        path: 'training-faq',
        loadChildren: () => import('./pages/training/faq/faq-page-training/faq-page-training.module').then(m => m.FaqPageTrainingModule),
        // component: FaqPageTrainingComponent
    },
    {
        path: 'pricing',
        loadChildren: () => import('./pages/price/pricing-page/pricing-page.module').then(m => m.PricingPageModule),
        // component: PricingPageComponent
    },
    {
        path: 'sector',
        loadChildren: () => import('./pages/sector/sector.module').then(m => m.SectorModule),
        // component: SectorComponent
    },
    {
        path: 'explore-services',
        loadChildren: () => import('./pages/browse-services/browse-services-main/browse-services-main.module').then(m => m.BrowseServicesMainModule),
        // component: BrowseServicesMainComponent,
        data: {
            title: 'Find Top Structural Engineering Services | BuildTwin',
            description: 'Connect with top structural engineering service providers on BuildTwin. Collaborate globally on  precast detailing, BIM modeling, 3D rebar, structural design, and more.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/explore-services'
        }
    },
    {
        path: 'services/pre-cast-detailing-services',
        loadChildren: () => import('./pages/services-new/services-new.module').then(m => m.ServicesNewModule),
        // component: ServicesNewComponent,
        data: {
            title: 'Precast Detailing Services by Pre-Qualified Vendors | BuildTwin',
            description: "Streamline your projects with BuildTwin's precast detailing services. Select from hundreds of pre-qualified vendors, monitor progress live, and receive internationally compliant drawings",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/pre-cast-detailing-services'
        }
    },

    {
        path: 'services/rebar-detailing-services',
        loadChildren: () => import('./pages/rebar/services-new.module').then(m => m.RebarServicesNewModule),
        // component: RebarServicesNewComponent,
        data: {
            title: 'Rebar Detailing Services | Shop Drawings, 3D Modeling and Footing Detail',
            description: "Buildtwin offers rebar detailing services from pre-qualified vendors, including rebar shop drawings, 3D modeling, footing detail, and bar bending schedules for all your construction needs.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/rebar-detailing-services'
        }
    },

    {
        path: 'services/bim-services',
        loadChildren: () => import('./pages/bim/services-new.module').then(m => m.BimServicesNewModule),
        // component: BimServicesNewComponent,
        data: {
            title: 'BIM (Building Information Modeling) Services For AEC Projects | BuildTwin',
            description: "BuildTwin Marketplace offers comprehensive BIM services to streamline your AEC projects. Our services include BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM. Let us help you transform your project with our top-notch BIM services.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-services'
        }
    },

    {
        path: 'services/steel-detailing-services',
        loadChildren: () => import('./pages/structural-steel/services-new.module').then(m => m.StructuralSteelServicesNewModule),
        // component: StructuralSteelServicesNewComponent,
        data: {
            title: 'Structural Steel Detailing Services for AEC Project | BuildTwin',
            description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects. Our services include shop drawings, erection drawings, 2D and 3D modelling, connection design, and miscellaneous steel detailing.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services'
        }
    },

    {
        path: 'services/bim-service-provider-in-usa',
        loadChildren: () => import('./pages/bim-usa/services-new.module').then(m => m.BimUsaServicesNewModule),
        // component: BimUsaServicesNewComponent,
        data: {
            title: 'Connect with BIM Modeling Services Providers for AEC Projects Across the USA | BuildTwin',
            description: "Connect top-tier BIM service providers across the USA. Our BIM services provider specialize in BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-service-provider-in-usa'
        }
    },

    {
        path: 'services/steel-detailing-services-in-usa',
        loadChildren: () => import('./pages/steel-detailing-usa/services-new.module').then(m => m.SteelDetailingUsaServicesNewModule),
        // component: SteelDetailingUsaServicesNewComponent,
        data: {
            title: 'Structural Steel Detailing Vendors from USA for AEC Projects',
            description: "BuildTwin Marketplace offers a comprehensive platform for all your structural steel detailing services for construction and engineering projects in the USA. Our services include shop drawings, erection drawings, 2D and 3D modeling, connection design, and miscellaneous steel detailing.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services-in-usa'
        }
    },

    {
        path: 'notfound',
        loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
        // component: ComingSoonComponent
    },


    {
        path: '**', redirectTo: '/notfound',
        pathMatch: 'full'
    }
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