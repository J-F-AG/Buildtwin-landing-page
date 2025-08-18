import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenderDetailService {
  detalMeta = {
    'j-f-india': {
      title: 'J&F India | Precast Design and Detailing Specialists | Buildtwin Partner',
      description: "J&F India is an internationally established precast design and detailing specialists and partner of Buildtwin. We offer a wide range of services including PEB Design and Detailing, BoQ/QS Services, Connection Engineering, and much more. Trust J&F India for all your engineering and project management needs.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/j-f-india'
    },
    'durchgeplant': {
      title: 'Durchgeplant  | Precast Design and Detailing Specialists | Buildtwin Partner',
      description: "Durchgeplant is your trusted partner for precast design and detailing services. With expertise in structural design, BIM modeling, and project management, we specialize in delivering top-notch solutions for production facilities, logistics centers, power plants, residential buildings, and commercial buildings.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/durchgeplant'
    },
    'caldim-engineering': {
      title: 'Caldim | Engineering and Detailing Services | Buildtwin Partner',
      description: "Caldim offers top-notch engineering and detailing services, specializing in steel detailing, precast detailing, connection design, BIM, architecture, and more. As a trusted Buildtwin partner, we help bring your projects to life with precision and expertise.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/caldim-engineering'
    },
    'sublime-structures': {
      title: 'Sublime Structures | Structural Detailing & Designing Solutions | Buildtwin Partner',
      description: "Sublime Structures is a leading provider of professional structural detailing and designing solutions. Our expert team caters to clients in the United States, Canada, and the United Kingdom, and beyond. Partner with Buildtwin for all your construction modeling needs.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/sublime-structures'
    },
    'mold-tek-technologies-limited': {
      title: 'Moldtek Technologies | Engineering & Technology Solutions | Buildtwin Partner',
      description: "Moldtek Technologies is your trusted partner for engineering and technology solutions. We specialize in manufacturing design, construction, telecom, and more. Let us help bring your ideas to life. ",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/mold-tek-technologies-limited'
    },
    'gbc-engineers': {
      title: 'GBC Engineers |  Structural Engineering & Design Solutions | Buildtwin Partner',
      description: "GBC Engineers is a leading provider of high-quality structural engineering and design solutions for projects worldwide. Our expertise includes civil engineering, geotechnical engineering, value engineering design, and project management services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/gbc-engineers'
    },
    'gbcengineers': {
      title: 'GBC Engineers |  Structural Engineering & Design Solutions | Buildtwin Partner',
      description: "GBC Engineers is a leading provider of high-quality structural engineering and design solutions for projects worldwide. Our expertise includes civil engineering, geotechnical engineering, value engineering design, and project management services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/gbcengineers'
    },
    'aarbee-structures-private-limited': {
      title: 'Aarbee Structures | Structural Steel Designing & Detailing | Buildtwin Partner',
      description: "Aarbee Structures is a trusted partner for all your structural design and steel detailing needs in residential, commercial, and industrial projects. Work with us and experience top-notch services from Buildtwin.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/aarbee-structures-private-limited'
    },
    'trikaal-tech-enterprises-private-limited': {
      title: 'Trikaal Tech Enterprises | BIM/VDC, Engineering Design Services | Buildtwin Partner',
      description: "Trikaal Tech Enterprises is a premier BIM/VDC and engineering design services provider, offering comprehensive solutions in the telecom, construction, automotive, and solar energy industries. As a trusted Buildtwin Partner, we delivers innovative, tailored, and high-quality engineering solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/trikaal-tech-enterprises-private-limited'
    },
    'repl-infosystems': {
      title: 'REPL infosystems | Detailed Engineering, BIM Modelling, MEP | Buildtwin Partner',
      description: "REPL infosystems is a trusted partner for detailed engineering, BIM modeling, and MEP services in the AEC and Mechanical sectors. Our expertise includes architecture software, construction project management, BIM, 3D modeling software.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/repl-infosystems'
    },
    'replinfosystems': {
      title: 'REPL infosystems | Detailed Engineering, BIM Modelling, MEP | Buildtwin Partner',
      description: "REPL infosystems is a trusted partner for detailed engineering, BIM modeling, and MEP services in the AEC and Mechanical sectors. Our expertise includes architecture software, construction project management, BIM, 3D modeling software.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/replinfosystems'
    },
    'precision-precast-solutions-private-limited': {
      title: 'Precision Precast Solutions | Civil/Structural, MEP Engineering Services | Buildtwin Partner',
      description: "Precision Precast Solutions is a trusted partner for civil/structural and MEP engineering services. Our services includes design and detailing, BIM modeling, MEP, project management, and precast detailing. Partner with us for precision and efficient precast solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/precision-precast-solutions-private-limited'
    },
    'precisionprecastsolutionsprivatelimited': {
      title: 'Precision Precast Solutions | Civil/Structural, MEP Engineering Services | Buildtwin Partner',
      description: "Precision Precast Solutions is a trusted partner for civil/structural and MEP engineering services. Our services includes design and detailing, BIM modeling, MEP, project management, and precast detailing. Partner with us for precision and efficient precast solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/precisionprecastsolutionsprivatelimited'
    },
    'oriole-design-tech-solutions-llp': {
      title: 'Oriole | BIM Solutions For AEC Industry | Buildtwin Partner',
      description: "Oriole is a leading BIM service provider offering end-to-end solutions to architects, engineers, and construction professionals in the AEC industry. Partnered with Buildtwin, we deliver BIM solutions to streamline your projects and enhance collaboration.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/oriole-design-tech-solutions-llp'
    },
    'orioledesigntechsolutionsllp': {
      title: 'Oriole | BIM Solutions For AEC Industry | Buildtwin Partner',
      description: "Oriole is a leading BIM service provider offering end-to-end solutions to architects, engineers, and construction professionals in the AEC industry. Partnered with Buildtwin, we deliver BIM solutions to streamline your projects and enhance collaboration.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/orioledesigntechsolutionsllp'
    },
    'innowell-engineering-international-pvt-ltd': {
      title: 'Innowell Engineering  | MEP, BIM & Sustainability Services | Buildtwin Partner',
      description: "Innowell Engineering offers MEP, BIM, and sustainability services as a Buildtwin Partner. We provide expert solutions in structural steel detailing, BIM modelling, and MEP design services for commercial buildings, industries, data centers.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/innowell-engineering-international-pvt-ltd'
    },
    'clove-technologies-private-limited': {
      title: 'Clove Technologies | BIM Modelling for AEC Industries | Buildtwin Partner',
      description: "Clove Technologies is a leading BIM modeling service provider specializing in the AEC industry, partnering with Buildtwin. Our comprehensive expertise includes design, detailing, digital construction, mapping, measurement, and transformation services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/clove-technologies-private-limited'
    },
    'clovetechnologiesprivatelimited': {
      title: 'Clove Technologies | BIM Modelling for AEC Industries | Buildtwin Partner',
      description: "Clove Technologies is a leading BIM modeling service provider specializing in the AEC industry, partnering with Buildtwin. Our comprehensive expertise includes design, detailing, digital construction, mapping, measurement, and transformation services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/clovetechnologiesprivatelimited'
    },
    'tritech-corporation': {
      title: 'TRITECH ENGINEERING | BIM & MEP Engineering Solutions | Buildtwin Partner',
      description: "Tritech Engineering is a leading firm specializing in MEP solutions and integrated BIM modeling. As a trusted Buildtwin partner, we deliver innovative engineering solutions for your construction projects.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/tritech-corporation'
    },
    'cosmere-technologies': {
      title: 'Cosmere Technologies | Digital Engineering & Modeling Services | Buildtwin Partner',
      description: "Cosmere Technologies specializes in digital engineering and modeling services for the AEC and infrastructure industries. As a trusted Buildtwin partner, we offer comprehensive digitization solutions including BIM, geospatial, CGI, and digitization services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/cosmere-technologies'
    },
    'arsa-engineering-consultancy-services-pvt-ltd': {
      title: 'ARSA Engineering Consultancy Services Pvt Ltd | Expert Structural Engineering Solutions',
      description: "Discover ARSA Engineering Consultancy Services Pvt Ltd, a leading structural engineering firm based in Bengaluru, India, with offices in Dubai and Malaysia. Offering world-class design, detailing, and BIM services for diverse sectors including commercial, residential, and industrial projects. Explore our portfolio, including iconic projects like Grand Hyatt Noida and Sunway Pyramid Malaysia, and start your enquiry today for tailored engineering solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/arsa-engineering-consultancy-services-pvt-ltd'
    },
    'design-forum-international': {
      title: 'Design Forum International | Innovative Architectural Solutions',
      description: "Explore Design Forum International (DFI), a premier architectural firm headquartered in Noida, India, with 28 years of excellence. Specializing in people-first architecture and urbanism, DFI delivers world-class design and detailing services across sectors like commercial, residential, and infrastructure. View our iconic projects, including Silverglades Hightown and Thiruvananthapuram Central Railway Station, and start your enquiry for tailored solutions today.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/design-forum-international'
    },
    'cundall': {
      title: 'Cundall | Global Leader in Sustainable Engineering Solutions',
      description: "Discover Cundall, a global multi-disciplinary engineering firm headquartered in Hong Kong, with 47 years of expertise in sustainable design and environmental solutions. Specializing in zero carbon strategies, Cundall delivers innovative services across data centers, infrastructure, and more. Explore projects like The Biosphere at Newcastle Helix and Sohar International Bank, and start your enquiry for world-class engineering today.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/cundall'
    },
    'grob-hoffmann': {
      title: 'Grob & Hoffmann – Expert Lighting Design & Planning Solutions | Buildtwin Marketplace',
      description: "Grob & Hoffmann offer expert lighting design plans, architectural lighting planning, and custom concepts for architects, interior designers, and planners.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/grob-hoffmann'
    },
    'bim-innovations': {
      title: 'BIM Innovations – BIM Outsourcing & Architectural Services | Buildtwin Marketplace',
      description: "BIM Innovations offers expert BIM outsourcing and architectural services, from 3D modeling to scan to BIM, MEP, rendering, and detailed BIM documentation.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/bim-innovations'
    },
    'asc-technology-solutions': {
      title: 'ASC Technology – BIM Outsourcing & Virtual Design Services | Buildtwin Marketplace',
      description: "ASC Technology is among the top BIM outsourcing companies in India, offering Virtual Design Construction services to AEC firms across USA, UK, Europe, and more.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/asc-technology-solutions'
    },
    'jes': {
      title: 'JES Services – BIM Consultancy for Middle East AEC Projects | Buildtwin Marketplace',
      description: "JES Services, a leading BIM consultancy, empowers AEC firms with expert staffing and digital construction solutions. Trusted JES company for scalable BIM delivery.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/jes'
    },
    'nhance': {
      title: 'Nhance – Structural & Bridge Design Services | Buildtwin Marketplace',
      description: "Nhance delivers structural design services and bridge structure design rooted in sustainability, local context, and long-term client collaboration for real impact.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/nhance'
    },
    'suisseplan': {
      title: 'suisseplan – Specialist in structural and infrastructure planning | Buildtwin Marketplace',
      description: "From infrastructure to environmental planning, suisseplan offers tailored, cross-sector solutions grounded in trust, innovation, and sustainable thinking.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/suisseplan'
    },
    'seacad': {
      title: 'Seacad – Global Experts in Structural Steel Detailing Services | Buildtwin Marketplace',
      description: "Since 1996, Seacad delivers precise steel detailing services with 3D modeling for efficient fabrication. Trusted by global fabricators for quality and accuracy.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/seacad'
    },
    'gate-precast': {
      title: 'GATE Precast – Architectural Precast Concrete Experts | Buildtwin Marketplace',
      description: "GATE Precast delivers top-tier architectural precast concrete with innovative finishes, expert project management, and a commitment to quality and timelines.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/gate-precast'
    },
    'systra-group': {
      title: 'SYSTRA Group – Expert Infrastructure & Public Transport Solutions  Buildtwin Marketplace',
      description: "SYSTRA Group delivers innovative public transport solutions and infrastructure for transportation worldwide, driving urban development for over 65 years.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/systra-group'
    },
    'united-bim': {
      title: 'United-BIM Inc. - Find the Experts of Revit & BIM Modeling Services | Buildtwin Marketplace',
      description: "United-BIM Inc. offers quality, fast Revit modeling services with a consultative approach for AEC professionals, delivering value and peace of mind.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/united-bim'
    },
    'mechciv-designers-llp': {
      title: 'MechCiv LLP – CAD Drafting & BIM Outsourcing for AEC Projects | Buildtwin Marketplace',
      description: "MechCiv Designers LLP provides high-quality CAD drafting and BIM outsourcing services, supporting AEC firms with architectural, structural, and MEPF solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/mechciv-designers-llp'
    },
    'archivista-consultants-pvt-ltd': {
      title: 'Architectural Design & Construction Services by Archivista | Buildtwin Marketplace',
      description: "Archivista offers expert architectural design services and construction solutions, delivering excellence in structural planning and project supervision since 1975.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/archivista-consultants-pvt-ltd'
    },
    'obermeyer-infrastruktur-gmbh-co-kg': {
      title: 'Leading Infrastructure Construction Company with 60+ Years Expertise by OBERMEYER Infrastructure | Buildtwin',
      description: "With 60+ years of experience, we provide complete infrastructure construction services—planning, project management, and consulting—tailored to client needs.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/obermeyer-infrastruktur-gmbh-co-kg'
    },
    'mlw-ingenieure-leipzig-gmbh': {
      title: 'Reliable Structural Engineering Service by MLW Ingenieure Leipzig | Buildtwin ',
      description: "From concept to construction, MLW offers advanced structural engineering service using BIM for stable, sustainable, and aesthetically designed building solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/mlw-ingenieure-leipzig-gmbh'
    },
    'dekic-krämer-elektrotechnik': {
      title: 'Trusted electrical engineering & Renewable Energy Services by DEKIC Elektroanlagenbau | Buildtwin',
      description: "DEKIC offers expert electrical engineering and renewable energy services across Germany—smart systems, future-ready designs, and full-service implementation.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/dekic-krämer-elektrotechnik'
    },
    'mac-engineers-vietnam-co-ltd': {
      title: 'Building Construction & Consulting Service by MAC Engineers Vietnam | Buildtwin',
      description: "German-run MAC Engineers Vietnam offers expert building construction, 3D modeling, BIM consulting, and planning with 45+ drafters serving clients across Europe and Asia.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/mac-engineers-vietnam-co-ltd'
    },
    'adept-engineering-solutions-private-limited': {
      title: 'Steel Structure & Structural Design Services by Adept Engineering Solution | Buildtwin',
      description: "Adept Engineering provides ISO-certified structural engineering services and steel structure detailing, delivering AISC-standard precision from Tamil Nadu, India.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/adept-engineering-solutions-private-limited'
    },
    'aecom': {
      title: 'Structural Engineering & Infrastructure Consulting Experts by AECOM',
      description: "AECOM is a leading infrastructure consulting firm providing innovative structural engineering services for sustainable, impactful, and large-scale global projects.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/aecom'
    },
    'bachmann-liebig-consulting': {
      title: 'Structural Engineering Firm for Precast Concrete Projects by BLC | Buildtwin',
      description: "BLC offers expert structural solutions and precast concrete construction for high-rise and complex projects, delivering quality, precision, and cost-efficiency.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/bachmann-liebig-consulting'
    },
    'bim-global-solutions': {
      title: 'BIM Global Solutions | BIM Implementation & Documentation Services',
      description: "BIM Global Solutions offers expert BIM implementation, BIM services, and documentation support to help AEC firms adopt advanced digital construction workflows.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/bim-global-solutions'
    },
    'cosmeretechnologies': {
      title: 'BIM Modeling & AEC Software Expertise by Cosmere Technologies | Buildtwin',
      description: "From Scan to BIM to modeling, Cosmere Technologies uses licensed AEC software and expert teams to deliver top-tier BIM services with quality and compliance.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/cosmeretechnologies'
    },
    'cresire-consultants-private-limited': {
      title: 'Cresire’s BIM Construction & Point Cloud to BIM Solutions | Buildtwin',
      description: "Cresire offers BIM construction management, point cloud to BIM, 3D rendering, and CAD drafting services—supporting all phases from planning to project execution.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/cresire-consultants-private-limited'
    },
  }
  constructor() { }
}
