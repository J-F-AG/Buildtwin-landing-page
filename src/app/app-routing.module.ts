import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [


    {
        path: '',
        loadChildren: () => import('./pages/Home/help-desk-home/help-desk-home.module').then(m => m.HelpDeskHomeModule),
        // component: HelpDeskHomeComponent,
        data: {
            title: 'Top Structural Engineering Services, BIM Service & CAD Solutions | BuildTwin',
            description: 'Connect with top structural engineering companies for BIM modeling, rebar detailing, precast detailing, and CAD services across the USA, EU, Middle East, UK, Australia, and India.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com',
            keywords: 'Structural Engineering Services, top structural engineering firms, BIM Modeling service'
        }
    },
    {
        path: 'ai-capabilities',
        loadChildren: () => import('./pages/ai-capabilities/ai-capabilities-page/ai-capabilities-page.module').then(m => m.AiCapabilitiesPageModule),
        // component: HelpDeskHomeComponent,
        data: {
            title: 'Top Structural Engineering Services, BIM Service & CAD Solutions | BuildTwin',
            description: 'Connect with top structural engineering companies for BIM modeling, rebar detailing, precast detailing, and CAD services across the USA, EU, Middle East, UK, Australia, and India.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com',
            keywords: 'Structural Engineering Services, top structural engineering firms, BIM Modeling service'
        }
    },
    {
        path: 'case-studies',
        loadChildren: () => import('./pages/case-studies/case-studies-main/case-studies-main.module').then(m => m.CaseStudiesMainModule),
        // component: BrowseServicesMainComponent,
        data: {
            title: 'Find Top Structural Engineering Services | BuildTwin',
            description: 'Connect with top structural engineering service providers on BuildTwin. Collaborate globally on  precast detailing, BIM modeling, 3D rebar, structural design, and more.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/explore-services'
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
        path: 'delivery-plattform',
        loadChildren: () => import('./pages/delivery-plattform/delivery-plattform.module').then(m => m.DeliveryPlattformModule),
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
        path: 'how-it-works',
        loadChildren: () => import('./pages/how-it-works/how-it-works/how-it-works.module').then(m => m.HowItWorksModule),
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
            description: "Read BuildTwin's Terms of Service. Understand our policies, user responsibilities, and guidelines for using our construction marketplace and software.",
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
    {path: 'building-code/australian-standards', 
        // component: BuildingCodeEuroComponent,
        loadChildren: () => import('./pages/building-code-as/sector.module').then(m => m.BuildingCodeASModule),
        data: {
            title: 'Australian Standards in Construction: Ensuring Safety and Quality',
            description: 'Discover how Australian standards in construction enhance safety and quality. Learn key regulations and best practices to ensure compliance. Read more.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/building-code/australian-standards'
        }
    },
    {path: 'building-code/iso-standards', 
        // component: BuildingCodeEuroComponent,
        loadChildren: () => import('./pages/building-code-iso/sector.module').then(m => m.BuildingCodeISOModule),
        data: {
            title: 'ISO Standard in Construction: Ensuring Safety and Quality',
            description: 'Ensure safety, quality & sustainability in construction with ISO certified vendors. BuildTwin connects you to trusted partners for global compliance.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/building-code/iso-standards'
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
            description: "Compare SDS2 vs Tekla—top structural detailing software. Find the best steel detailing software with features, pricing, and pros for your next project.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/software/structural-steel-detailing',
            keywords: 'steel detailing software, best structural detailing software, sds2 vs tekla, structural detailing software'
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
    {path: 'sector/powerplant', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-power-plant/sector.module').then(m => m.SectorPowerPlantModule),
        data: {
            title: 'Expert Power Plant Engineering Solutions | BuildTwin Marketplace',
            description: 'Discover expert vendors for power plant projects and power plant engineering services in thermal, nuclear, and renewable energy. Enhance efficiency with BuildTwin’s ERP solutions.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/powerplant'
        }
    },
    {path: 'sector/bridge', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-bridge/sector.module').then(m => m.SectorBridgeModule),
        data: {
            title: 'Bridge Structural Engineering Experts & Vendors | BuildTwin',
            description: 'Discover expert solutions for bridge precast, design software, and structure development. BuildTwin connects global expertise for complex bridge engineering projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/bridge'
        }
    },
    {path: 'sector/stadium', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-stadium/sector.module').then(m => m.SectorStadiumModule),
        data: {
            title: 'Stadium Structural Design Solutions & Vendors | BuildTwin',
            description: 'Find top stadium structural design, steel structure, and roof design experts. BuildTwin connects you with pre-qualified vendors for safe and innovative stadium projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/stadium'
        }
    },
    {path: 'sector/roads', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-roadways/sector.module').then(m => m.SectorRoadwaysModule),
        data: {
            title: 'Road & Highway Structural Engineering Design Experts | BuildTwin',
            description: 'Find top road design software, highway design solutions, and structural engineering experts. BuildTwin connects you with global AEC teams for efficient projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/roads'
        }
    },
    {path: 'sector/water-and-waste', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-water-and-waste/sector.module').then(m => m.SectorWaterAndWasteModule),
        data: {
            title: 'Water & Waste Management Plant Structural Design Vendors | BuildTwin',
            description: 'Explore water treatment plant design, wastewater solutions, and structural engineering. BuildTwin connects expert vendors for efficient and sustainable projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/water-and-waste'
        }
    },
    {path: 'sector/hospital', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-hospital/sector.module').then(m => m.SectorHospitalModule),
        data: {
            title: 'Hospital Structural Engineering & Infrastructure Vendors | BuildTwin',
            description: 'Access top hospital BIM and structural engineering experts for efficient designs. BuildTwin connects global AEC professionals for your healthcare projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/hospital'
        }
    },
    {path: 'sector/manufacturing-plant', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-manufacturing-plant/sector.module').then(m => m.SectorManufacturingPlantModule),
        data: {
            title: 'Top Structural Engineering Vendors For Manufacturing Plant Projects | BuildTwin Marketplace',
            description: 'Explore BIM manufacturing, factory structural solutions, and plant engineering. BuildTwin connects you with vetted vendors for efficient manufacturing projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/manufacturing-plant'
        }
    },
    {path: 'sector/theaters', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-theaters/sector.module').then(m => m.SectorTheatersModule),
        data: {
            title: 'Theater & Entertainment Venue Structural Engineering & Venue | BuildTwin',
            description: 'Find expert theater structural vendors for cinema design, engineering, and AEC solutions. BuildTwin connects you with trusted teams for innovative projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/theaters'
        }
    },
    {path: 'sector/commercial-building', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-commercial-building/sector.module').then(m => m.SectorCommercialBuildingModule),
        data: {
            title: 'Commercial Building Structural Design Engineers & Vendors | BuildTwin',
            description: 'Explore building structural design, steel structure solutions, and commercial engineering expertise. BuildTwin connects you with top vendors for efficient projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/commercial-building'
        }
    },
    {path: 'sector/industrial-building', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-industrial-building/sector.module').then(m => m.SectorIndustrialBuildingModule),
        data: {
            title: 'Industrial Building Structural Design Marketplace | BuildTwin Marketplace',
            description: 'Discover industrial design software, structural engineering, and building solutions. BuildTwin connects expert vendors for efficient industrial construction projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/industrial-building'
        }
    },
    {path: 'sector/residential-building', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-residential-building/sector.module').then(m => m.SectorResidentialBuildingModule),
        data: {
            title: 'Structural engineering vendors for residential buildings construction | BuildTwin Marketplace',
            description: 'Find expert residential structural engineers for homes, drawings, and architecture. BuildTwin connects you with trusted vendors for safe and efficient projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/residential-building'
        }
    },
    {path: 'sector/chemical-plant', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-chemical-plant/sector.module').then(m => m.SectorChemicalPlantModule),
        data: {
            title: 'Structural Engineering Vendors For Chemical Plant Projects | BuildTwin Marketplace',
            description: 'Discover chemical infrastructure solutions for plant projects. BuildTwin connects you with expert teams specializing in structural and engineering innovations.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/chemical-plant'
        }
    },
    {path: 'sector/schools', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-schools/sector.module').then(m => m.SectorSchoolsModule),
        data: {
            title: 'Structural Engineering and Precast Services Vendors for Schools and Education Building | BuildTwin',
            description: 'Find expert vendors for school structural facility design, campus infrastructure solutions, and innovative engineering services for safe educational buildings.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/schools'
        }
    },
    {path: 'sector/airports', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-airports/sector.module').then(m => m.SectorAirportsModule),
        data: {
            title: 'Airport Structural Engineering & Infrastructure Experts | BuildTwin',
            description: 'Find airport structural design, MEP solutions, and engineering vendors. BuildTwin connects experts for terminals, runways, hangars, and aviation facilities.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/airports'
        }
    },
    {path: 'sector/tunnels', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-tunnels/sector.module').then(m => m.SectorTunnelsModule),
        data: {
            title: 'Top Precast Concrete structural engineering vendors for Tunnel Projects| BuildTwin',
            description: 'Discover precast concrete tunnel solutions, tunnel structural engineering, and advanced designs. BuildTwin connects experts for efficient underground projects.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/tunnels'
        }
    },
    {path: 'sector/metro', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-metro/sector.module').then(m => m.SectorMetroModule),
        data: {
            title: 'BIM Structural Experts and Vendors for Metro & Railway Projects| BuildTwin',
            description: 'Discover metro structural design, Rail BIM solutions, and advanced engineering for transit projects. BuildTwin provides expert vendors for efficient infrastructure development.',
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/sector/metro'
        }
    },
    {path: 'sector/defense', 
        // component: SectorPowerPlantComponent,
        
        loadChildren: () => import('./pages/sector-defense/sector.module').then(m => m.SectorDefenseModule),
        data: {
            title: 'Defense Infrastructure Structural EngineeringExperts and Vendors | BuildTwin',
            description: 'Explore advanced defense structural solutions for secure infrastructure. Access expert vendors specializing in engineering for military bases, facilities, and utilities.',
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
            title: 'Precast Detailing Services | One-stop Platform for Precast Solutions by BuildTwin',
            description: "BuildTwin is your one-stop platform offering comprehensive precast detailing services to streamline construction projects. From shop drawings to machine files, we cover all your structural precast detailing requirements.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/pre-cast-detailing-services'
        }
    },

    {
        path: 'services/rebar-detailing-services',
        loadChildren: () => import('./pages/rebar/services-new.module').then(m => m.RebarServicesNewModule),
        // component: RebarServicesNewComponent,
        data: {
            title: 'Rebar Detailing Services & 3D Rebar Modeling  for Structural Engineering Projects | BuildTwin',
            description: "BuildTwin connects you with top rebar detailing companies offering 3D rebar modeling, shop drawings, footing details and bar bending schedules for all your construction needs.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/rebar-detailing-services',
            keywords: 'rebar detailing services, rebar detailing companies, 3d rebar detailing, rebar modeling services'
        }
    },

    {
        path: 'services/bim-services',
        loadChildren: () => import('./pages/bim/services-new.module').then(m => m.BimServicesNewModule),
        // component: BimServicesNewComponent,
        data: {
            title: 'BIM Modeling & Architectural BIM Services for AEC Projects | BuildTwin',
            description: "BuildTwin offers expert BIM services including BIM modeling, 3D BIM modeling services, architectural BIM services, and more. Trusted BIM service provider for AEC.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-services',
            keywords: 'bim modeling services, bim services, 3d bim modeling services, architectural bim services, bim service provider'
        }
    },

    {
        path: 'services/steel-detailing-services',
        loadChildren: () => import('./pages/structural-steel/services-new.module').then(m => m.StructuralSteelServicesNewModule),
        // component: StructuralSteelServicesNewComponent,
        data: {
            title: 'Structural Steel Detailing & Drafting Services for AEC | BuildTwin',
            description: "BuildTwin connects you with trusted steel detailing companies offering structural steel detailing, drafting services, and 2D/3D modeling for AEC projects.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services',
            keywords: 'structural steel detailing services, steel detailing services, steel detailing company, steel drafting services'
        }
    },

    {
        path: 'services/bim-outsourcing-services-in-usa',
        loadChildren: () => import('./pages/bim-usa/services-new.module').then(m => m.BimUsaServicesNewModule),
        // component: BimUsaServicesNewComponent,
        data: {
            title: 'Connect with BIM Modeling Services Providers for AEC Projects Across the USA | BuildTwin',
            description: "Connect top-tier BIM service providers across the USA. Our BIM services provider specialize in BIM modeling, 3D rendering, BIM coordination, Scan to BIM, MEP BIM, Architectural BIM, Structural BIM, Facade BIM, and Revit BIM.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/bim-outsourcing-services-in-usa'
        }
    },

    {
        path: 'services/steel-detailing-services-in-usa',
        loadChildren: () => import('./pages/steel-detailing-usa/services-new.module').then(m => m.SteelDetailingUsaServicesNewModule),
        // component: SteelDetailingUsaServicesNewComponent,
        data: {
            title: 'Top Steel Detailing Services & Companies in USA for AEC Projects | BuildTwin',
            description: "Find top steel detailing companies in USA offering drafting, modeling, and shop drawings. BuildTwin connects you to expert steel detailing services for AEC.",
            image: 'https://www.buildtwin.com/assets/images/serviceBanner.jpg',
            canonical: 'https://www.buildtwin.com/services/steel-detailing-services-in-usa',
            keywords: 'steel detailing services, steel detailing company, steel detailing companies in usa, steel detailing services usa'
        }
    },

    {
        path: 'services/drafting-services', 
        // component: DraftingServicesNewComponent,
        loadChildren: () => import('./pages/drafting-services/services-new.module').then(m => m.DraftingServicesNewModule),
        data: {
            title: 'Top Drafting Services and Firms for Construction Projects | BuildTwin',
            description: "Access architect drafting services, structural drafting, and full construction drafting solutions and service from top drafting firms through BuildTwin’s integrated platform.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/drafting-services',
            keywords: 'drafting service, architect drafting services, drafting firms, construction drafting, structural drafting services, construction drafting services'
        }
    },
    {
        path: 'services/cad-services', 
        // component: CadServicesNewComponent,
        loadChildren: () => import('./pages/cad-services/services-new.module').then(m => m.CadServicesNewModule),
        data: {
            title: 'CAD Design and Drafting Services for AEC Projects | BuildTwin Marketplace',
            description: "Find expert CAD services including CAD drafting and design service. Access global vendors for 2D drafting, 3D modeling, and BIM solutions for AEC projects.",
            image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
            canonical: 'https://www.buildtwin.com/services/cad-services',
            keywords: 'CAD Services, CAD Design Service, CAD Drafting Services'
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
            canonical: 'https://www.buildtwin.com/customer-success'
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
