import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenderDetailService {
  detalMeta = {
    'j&findia': {
      title: 'J&F India | Precast Design and Detailing Specialists | Buildtwin Partner',
      description: "J&F India is an internationally established precast design and detailing specialists and partner of Buildtwin. We offer a wide range of services including PEB Design and Detailing, BoQ/QS Services, Connection Engineering, and much more. Trust J&F India for all your engineering and project management needs.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/j&findia'
    },
    'durchgeplant': {
      title: 'Durchgeplant  | Precast Design and Detailing Specialists | Buildtwin Partner',
      description: "Durchgeplant is your trusted partner for precast design and detailing services. With expertise in structural design, BIM modeling, and project management, we specialize in delivering top-notch solutions for production facilities, logistics centers, power plants, residential buildings, and commercial buildings.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/durchgeplant'
    },
    'caldim': {
      title: 'Caldim | Engineering and Detailing Services | Buildtwin Partner',
      description: "Caldim offers top-notch engineering and detailing services, specializing in steel detailing, precast detailing, connection design, BIM, architecture, and more. As a trusted Buildtwin partner, we help bring your projects to life with precision and expertise.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/caldim'
    },
    'sublime': {
      title: 'Sublime Structures | Structural Detailing & Designing Solutions | Buildtwin Partner',
      description: "Sublime Structures is a leading provider of professional structural detailing and designing solutions. Our expert team caters to clients in the United States, Canada, and the United Kingdom, and beyond. Partner with Buildtwin for all your construction modeling needs.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/sublime'
    },
    'mold-tektechnologieslimited': {
      title: 'Moldtek Technologies | Engineering & Technology Solutions | Buildtwin Partner',
      description: "Moldtek Technologies is your trusted partner for engineering and technology solutions. We specialize in manufacturing design, construction, telecom, and more. Let us help bring your ideas to life. ",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/mold-tektechnologieslimited'
    },
    'gbcengineers': {
      title: 'GBC Engineers |  Structural Engineering & Design Solutions | Buildtwin Partner',
      description: "GBC Engineers is a leading provider of high-quality structural engineering and design solutions for projects worldwide. Our expertise includes civil engineering, geotechnical engineering, value engineering design, and project management services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/gbcengineers'
    },
    'aarbeestructuresprivatelimited': {
      title: 'Aarbee Structures | Structural Steel Designing & Detailing | Buildtwin Partner',
      description: "Aarbee Structures is a trusted partner for all your structural design and steel detailing needs in residential, commercial, and industrial projects. Work with us and experience top-notch services from Buildtwin.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/aarbeestructuresprivatelimited'
    },
    'trikaaltechEnterprisesprivatelimited': {
      title: 'Trikaal Tech Enterprises | BIM/VDC, Engineering Design Services | Buildtwin Partner',
      description: "Trikaal Tech Enterprises is a premier BIM/VDC and engineering design services provider, offering comprehensive solutions in the telecom, construction, automotive, and solar energy industries. As a trusted Buildtwin Partner, we delivers innovative, tailored, and high-quality engineering solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/trikaaltechEnterprisesprivatelimited'
    },
    'replinfosystems': {
      title: 'REPL infosystems | Detailed Engineering, BIM Modelling, MEP | Buildtwin Partner',
      description: "REPL infosystems is a trusted partner for detailed engineering, BIM modeling, and MEP services in the AEC and Mechanical sectors. Our expertise includes architecture software, construction project management, BIM, 3D modeling software.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/replinfosystems'
    },
    'precisionprecastsolutionsprivatelimited': {
      title: 'Precision Precast Solutions | Civil/Structural, MEP Engineering Services | Buildtwin Partner',
      description: "Precision Precast Solutions is a trusted partner for civil/structural and MEP engineering services. Our services includes design and detailing, BIM modeling, MEP, project management, and precast detailing. Partner with us for precision and efficient precast solutions.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/precisionprecastsolutionsprivatelimited'
    },
    'orioledesigntechsolutionsllp': {
      title: 'Oriole | BIM Solutions For AEC Industry | Buildtwin Partner',
      description: "Oriole is a leading BIM service provider offering end-to-end solutions to architects, engineers, and construction professionals in the AEC industry. Partnered with Buildtwin, we deliver BIM solutions to streamline your projects and enhance collaboration.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/orioledesigntechsolutionsllp'
    },
    'innowellengineeringinternationalpvtltd': {
      title: 'Innowell Engineering  | MEP, BIM & Sustainability Services | Buildtwin Partner',
      description: "Innowell Engineering offers MEP, BIM, and sustainability services as a Buildtwin Partner. We provide expert solutions in structural steel detailing, BIM modelling, and MEP design services for commercial buildings, industries, data centers.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/innowellengineeringinternationalpvtltd'
    },
    'clovetechnologiesprivatelimited': {
      title: 'Clove Technologies | BIM Modelling for AEC Industries | Buildtwin Partner',
      description: "Clove Technologies is a leading BIM modeling service provider specializing in the AEC industry, partnering with Buildtwin. Our comprehensive expertise includes design, detailing, digital construction, mapping, measurement, and transformation services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/clovetechnologiesprivatelimited'
    },
    'tritechcorporation': {
      title: 'TRITECH ENGINEERING | BIM & MEP Engineering Solutions | Buildtwin Partner',
      description: "Tritech Engineering is a leading firm specializing in MEP solutions and integrated BIM modeling. As a trusted Buildtwin partner, we deliver innovative engineering solutions for your construction projects.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/tritechcorporation'
    },
    'cosmeretechnologies': {
      title: 'Cosmere Technologies | Digital Engineering & Modeling Services | Buildtwin Partner',
      description: "Cosmere Technologies specializes in digital engineering and modeling services for the AEC and infrastructure industries. As a trusted Buildtwin partner, we offer comprehensive digitization solutions including BIM, geospatial, CGI, and digitization services.",
      image: 'https://www.buildtwin.com/assets/images/buildtwin.jpg',
      canonical: 'https://www.buildtwin.com/partners/cosmeretechnologies'
    },
  }
  constructor() { }
}
