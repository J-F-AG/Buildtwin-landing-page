import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [


    {
        path: '',
        loadChildren: () => import('./pages/Home/help-desk-home/help-desk-home.module').then(m => m.HelpDeskHomeModule),
        // component: HelpDeskHomeComponent,
        data: {
            title: 'Find Structural Engineering Services & Solutions | BuildTwin Marketplace',
            description: 'Find professional structural engineering services and solutions at BuildTwin Marketplace. Connect with top structural engineering firms & companies offering consultation and expert services across the USA, EU, Middle East, UK, Australia, and India.',
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
        path: 'pre-qualified',
        loadChildren: () => import('./pages/pre-qualified//provide-service.module').then(m => m.PreQualifiedModule),
        // component: ProvideServiceComponent,
        data: {
            title: 'Get pre-qualified & increase your reach.',
            description: 'With the BuildTwin pre-qualification program, you ensure you meet project requirements for different markets.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/pre-qualified'
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
        path: 'ai-faq',
        loadChildren: () => import('./pages/whybuildtwin/ai-faq/faq-page/faq-page.module').then(m => m.AiFaqPageModule),
        // component: FaqPageComponent,
        data: {
            title: 'Frequently Asked Questions | Buildtwin',
            description: "FAQs: How Buildtwin Connects Buyers and Vendors",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/ai-faq'
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
        data: {
            title: 'BuildTwin Terms of Service – Usage, Policies & Guidelines',
            description: "Read BuildTwin's Terms of Service. Understand our policies, user responsibilities, and guidelines for using our structural marketplace and software.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/terms-of-service'
        }
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
    {path: 'training-faq', 
        loadChildren: () => import('./pages/training/faq/faq-page-training/faq-page-training.module').then(m => m.FaqPageTrainingModule),
        data: {
            title: 'Frequently Asked Questions - answered',
            description: "Frequently Asked Questions - answered",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/training-faq'
        }
    },
    {path: 'pricing', 
        loadChildren: () => import('./pages/price/pricing-page/pricing-page.module').then(m => m.PricingPageModule),
        data: {
            title: 'BuildTwin Pro Pricing For  RFI Tracker & Construction Software - Buildtwin',
            description: "Explore BuildTwin Pro pricing. Streamline RFIs, manage projects, and win more bids with our construction RFI software. Boost visibility & trust with AI tools",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/pricing'
        }
        // component: PricingPageComponent
    },
    // {path: 'engineering-services/services',
    //     redirectTo: '/explore-services',
    //     pathMatch: 'full'
    // },
    {path: 'sector', 
        redirectTo: '/sector/data-centre',
        pathMatch: 'full'
        // component: SectorComponent
    },
    {path: 'software', 
        redirectTo: '/software/architecture-design-services',
        pathMatch: 'full'
        // component: SectorComponent
    },
    {path: 'building-code',
        redirectTo: '/building-code/aisc',
        pathMatch: 'full'
    },
    {path: 'building-code/aisc', 
        // component: BuildingCodeAiscComponent,
        loadChildren: () => import('./pages/building-code-aisc/sector.module').then(m => m.BuildingCodeAiscModule),
        data: {
            title: 'AISC Building Code Services for Steel Structures',
            description: 'Explore the importance of the AISC Building Code for safe, durable, and efficient steel construction. Connect with AISC-compliant service providers on BuildTwin',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/building-code/aisc'
        }
    },
    {path: 'building-code/eurocode', 
        // component: BuildingCodeEuroComponent,
        loadChildren: () => import('./pages/building-code-euro/sector.module').then(m => m.BuildingCodeEuroModule),
        data: {
            title: 'Understanding the Eurocode For Structural | BuildTwin Marketplace',
            description: 'Explore Eurocode standards for structural and civil engineering. Enhance safety, sustainability, and compliance in your projects with expert guidance.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/building-code/eurocode'
        }
    },
    {path: 'building-code/british-standards', 
        // component: BuildingCodeEuroComponent,
        loadChildren: () => import('./pages/building-code-bs/sector.module').then(m => m.BuildingCodeBSModule),
        data: {
            title: 'British Standards in Construction – Codes, Benefits & Services - Buildtwin',
            description: 'Understand British Building standards or codes for structural and civil engineering. Enhance safety and sustainability in your projects with expert guidance.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/building-code/british-standards'
        }
    },
    {path: 'software/architecture-design-services',
        // component: ArchitectureDesignServicesComponent,
        loadChildren: () => import('./pages/software/architecture-design-services/sector.module').then(m => m.ArchitectureDesignServicesModule),
        
        data: {
            title: 'Architecture & Structural Design  Software Comparison Autodesk Revit vs ALLPLAN',
            description: "Detailed comparison of Autodesk Revit and ALLPLAN architecture & structural design software. Explore their features, strengths, pricing, and ideal use cases to make the right choice for your project.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/software/architecture-design-services'
        }
    },
    {path: 'software/structural-steel-detailing',
        // component: StructuralSteelDetailingSoftwareComponent,
        loadChildren: () => import('./pages/software/structural-steel-detailing/sector.module').then(m => m.StructuralSteelDetailingSoftwareModule),
        data: {
            title: 'Structural Steel Detailing Software Comparison: Tekla Structures vs SDS/2',
            description: "Compare Tekla Structures and SDS/2 for structural steel detailing. Discover their features, advantages, pricing, and the best use cases for precise and efficient project delivery.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/software/structural-steel-detailing'
        }
    },
    {path: 'sector/data-centre', 
        // component: DataCenterSectorComponent,
        loadChildren: () => import('./pages/sector-data-center/sector.module').then(m => m.DataCenterSectorModule),
        data: {
            title: 'Expert Data Center Construction Services | BuildTwin Marketplace',
            description: 'Find expert vendors for data center projects. Get customized designs for colocation, hyperscale, and cloud data centers with BuildTwin’s global network.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/data-centre'
        }
    },
    {path: 'sector/power-plant', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-power-plant/sector.module').then(m => m.SectorPowerPlantModule),
        data: {
            title: 'Expert Power Plant Engineering Solutions | BuildTwin Marketplace',
            description: 'Discover expert vendors for power plant projects and power plant engineering services in thermal, nuclear, and renewable energy. Enhance efficiency with BuildTwin’s ERP solutions.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/power-plant'
        }
    },
    {path: 'sector/bridge', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-bridge/sector.module').then(m => m.SectorBridgeModule),
        data: {
            title: 'Find Expert Bridge Engineering Services | BuildTwin Marketplace',
            description: 'Connecting Global Expertise with Advanced AEC Solutions for Complex Bridge Design and Development Projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/bridge'
        }
    },
    {path: 'sector/stadium', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-stadium/sector.module').then(m => m.SectorStadiumModule),
        data: {
            title: 'Find Expert Stadium Structural Vendors | BuildTwin Marketplace',
            description: 'Advance structural and AEC solutions for stadium construction with BuildTwin. Connect with pre-qualified vendors to design safe, efficient stadium facilities.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/stadium'
        }
    },
    {path: 'sector/roads', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-roadways/sector.module').then(m => m.SectorRoadwaysModule),
        data: {
            title: 'Find Expert Road and Highway Structural Vendors | BuildTwin Marketplace',
            description: 'Advance structural and AEC solutions for roads and highways construction with BuildTwin. Connect with pre-qualified teams for road structural engineering.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/roads'
        }
    },
    {path: 'sector/water-and-waste', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-water-and-waste/sector.module').then(m => m.SectorWaterAndWasteModule),
        data: {
            title: 'Expert Water & Waste Management Plant Designers | BuildTwin Marketplace',
            description: 'BuildTwin connects you with expert vendors for industrial water waste treatment, sewage backup management, and water recycling.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/water-and-waste'
        }
    },
    {path: 'sector/hospital', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-hospital/sector.module').then(m => m.SectorHospitalModule),
        data: {
            title: 'Find Expert Hospital Infrastructure Vendors | BuildTwin Marketplace',
            description: 'BuildTwin provides access to a global network of hospital designers and AEC experts, ensuring you find the right expertise for your project needs.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/hospital'
        }
    },
    {path: 'sector/manufacturing-plant', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-manufacturing-plant/sector.module').then(m => m.SectorManufacturingPlantModule),
        data: {
            title: 'Top Structural Engineering Vendors For Manufacturing Plant Projects | BuildTwin Marketplace',
            description: 'AEC solutions for manufacturing plant construction with BuildTwin. Connect with pre-qualified structural engineering teams for manufacturing plant projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/manufacturing-plant'
        }
    },
    {path: 'sector/theaters', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-theaters/sector.module').then(m => m.SectorTheatersModule),
        data: {
            title: 'Expert Structural Engineering Vendors For Theaters | BuildTwin Marketplace',
            description: 'Advance structural and AEC solutions for theater construction with BuildTwin. Connect with pre-qualified teams for structural engineering services.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/theatres'
        }
    },
    {path: 'sector/commercial-building', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-commercial-building/sector.module').then(m => m.SectorCommercialBuildingModule),
        data: {
            title: 'Structural Engineering Vendors For Commercial Building Projects | BuildTwin Marketplace',
            description: 'AEC solutions for Commercial Building Projects with BuildTwin. Connect with pre-qualified structural engineering teams for your commercial building projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/commercial-building'
        }
    },
    {path: 'sector/industrial-building', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-industrial-building/sector.module').then(m => m.SectorIndustrialBuildingModule),
        data: {
            title: 'Find Expert Industrial Building Structural Vendors | BuildTwin Marketplace',
            description: 'Advance structural and AEC solutions for Industrial Building Construction Projects with BuildTwin. Connect with pre-qualified structural engineering vendors.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/industrial-building'
        }
    },
    {path: 'sector/residential-building', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-residential-building/sector.module').then(m => m.SectorResidentialBuildingModule),
        data: {
            title: 'Expert Structural Vendors for Residential Buildings | BuildTwin Marketplace',
            description: 'BuildTwin connects you with expert structural engineering vendors for residential buildings projects for structural engineering and architecture services.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/residential-building'
        }
    },
    {path: 'sector/chemical-plant', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-chemical-plant/sector.module').then(m => m.SectorChemicalPlantModule),
        data: {
            title: 'Structural Engineering Vendors For Chemical Plant Projects | BuildTwin Marketplace',
            description: 'AEC solutions for Chemical Plant Projects with BuildTwin. Connect with pre-qualified structural engineering teams for your complex chemical plant projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/chemical-plant'
        }
    },
    {path: 'sector/schools', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-schools/sector.module').then(m => m.SectorSchoolsModule),
        data: {
            title: 'Expert Structural Vendors for Schools Building | BuildTwin Marketplace',
            description: 'BuildTwin connects you with expert structural engineering vendors and architectural firms for School/Educational Building Projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/schools'
        }
    },
    {path: 'sector/airports', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-airports/sector.module').then(m => m.SectorAirportsModule),
        data: {
            title: 'Expert Structural Vendors for Airport Projects | BuildTwin Marketplace',
            description: 'BuildTwin connects you with expert structural engineering vendors and architectural firms for Airport Projects success.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/airports'
        }
    },
    {path: 'sector/tunnels', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-tunnels/sector.module').then(m => m.SectorTunnelsModule),
        data: {
            title: 'Top Structural Engineering Firms For Tunnel Projects | BuildTwin Marketplace',
            description: 'AEC solutions for tunnel construction projects with BuildTwin. Connect with pre-qualified structural engineering teams for tunnel engineering.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/tunnels'
        }
    },
    {path: 'sector/metro', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-metro/sector.module').then(m => m.SectorMetroModule),
        data: {
            title: 'Structural Engineering Services for Metro & Railway Projects | BuildTwin Marketplace',
            description: 'Connecting Global Expertise with Advanced AEC Solutions for Complex Metro & Railway Projects - Structural Design and Development Projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/metro'
        }
    },
    {path: 'sector/defense', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-defense/sector.module').then(m => m.SectorDefenseModule),
        data: {
            title: 'Expert Structural Vendors for Defense Infrastructure | BuildTwin Marketplace',
            description: 'BuildTwin connects you with expert structural engineering vendors and architectural firms for your defense infrastructure projects success.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/defense'
        }
    },
    // {
    //     path: 'pricing',
    //     loadChildren: () => import('./pages/price/pricing-page/pricing-page.module').then(m => m.PricingPageModule),
    //     // component: PricingPageComponent
    //     data: {
    //         title: 'BuildTwin ProPricing',
    //         description: "BuildTwin bundles and integrates different software solutions in one. BuildTwin 'pays for itself' - with its high degree of efficiency gains.",
    //         image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
    //         canonical: 'https://www.buildtwin.com/pricing'
    //     }
    // },
    // {
    //     path: 'sector',
    //     loadChildren: () => import('./pages/sector/sector.module').then(m => m.SectorModule),
    //     // component: SectorComponent
    // },
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
            title: 'Precast Detailing Services | Precast Panel & Concrete Detailing | BuildTwin',
            description: "Explore BuildTwin Marketplace for precast detailing services, including precast panel, concrete, and wall detailing. Serving the USA, EU, Middle East, UK, Australia, and India. Optimize your projects with our experienced precast detailers.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/pre-cast-detailing-services'
        }
    },

    {
        path: 'services/rebar-detailing-services',
        loadChildren: () => import('./pages/rebar/services-new.module').then(m => m.RebarServicesNewModule),
        // component: RebarServicesNewComponent,
        data: {
            title: 'Rebar Detailing Services | Rebar Shop Drawings & Design | BuildTwin',
            description: "BuildTwin Marketplace offers rebar detailing and shop drawing services, catering to clients in the USA, EU, Middle East, UK, Australia, and India. Partner with top rebar design & detailing services companies.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/rebar-detailing-services'
        }
    },

    {
        path: 'services/bim-services',
        loadChildren: () => import('./pages/bim/services-new.module').then(m => m.BimServicesNewModule),
        // component: BimServicesNewComponent,
        data: {
            title: 'BIM Services | BIM Modeling Consulting | BIM MEP Outsourcing | BuildTwin',
            description: "Explore BIM services at BuildTwin Marketplace. Offering BIM outsourcing and consulting services for architectural, structural and engineering. Trusted Building Information Modeling service providers in USA, EU, Middle East, UK, Australia & India.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-services'
        }
    },

    {
        path: 'services/steel-detailing-services',
        loadChildren: () => import('./pages/structural-steel/services-new.module').then(m => m.StructuralSteelServicesNewModule),
        // component: StructuralSteelServicesNewComponent,
        data: {
            title: 'Steel Detailing Services | Marketplace for Structural Steel Detailing | BuildTwin',
            description: "BuildTwin Marketplace offers a comprehensive platform for steel detailing services. Trusted by structural steel detailing companies, we serve clients across the USA, Middle East, EU, UK, Australia and India.",
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
        path: 'services/drafting-services', 
        // component: DraftingServicesNewComponent,
        loadChildren: () => import('./pages/drafting-services/services-new.module').then(m => m.DraftingServicesNewModule),
        data: {
            title: 'Expert Drafting Services for Construction Projects | BuildTwin',
            description: "Access top-tier drafting services for architectural, structural, and MEP designs. Compare quotes and manage your AEC projects with BuildTwin’s integrated platform.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/drafting-services'
        }
    },
    {
        path: 'services/cad-services', 
        // component: CadServicesNewComponent,
        loadChildren: () => import('./pages/cad-services/services-new.module').then(m => m.CadServicesNewModule),
        data: {
            title: 'CAD Services for AEC Projects | BuildTwin Marketplace',
            description: "Find expert CAD service providers for 2D drafting, 3D modeling, and BIM solutions. Streamline your construction projects with BuildTwin’s global vendor network.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/cad-services'
        }
    },
    {
        path: 'customer-success', 
        // component: CadServicesNewComponent,
        loadChildren: () => import('./pages/customer-success/customer-success.module').then(m => m.CustomerSuccessModule),
        data: {
            title: 'Request BuildTwin Customer Success Stories & Case Studies',
            description: "See how BuildTwin delivers results. Request customer success stories and explore case studies showcasing project success.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/customer-success'
        }
    },

    { path: 'notfound', loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
        data: {
            title: 'Oops! Page Not Found',
            description: "We are sorry about this but the page you were looking for does not exist.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/notfound'
        }
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
