import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drafting-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrl: './precast-service.component.scss'
})
export class DraftingPrecastServiceComponent implements OnInit {
  
  title:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'Architectural Drafting Services',
      details: [
        {
          mainContent: 'Convert your design ideas into detailed and accurate drawings with our vendors. From rough hand sketches to design plans, our platform connects you with experts who provide full architectural drafting services, ensuring precision and global standards compliance.',
          listItems: [
            'Floor and Roof Plans',
            'As-Built Drawings',
            'Shop Drawings',
            'Elevation and Section Drawings',
            'Modular and Millwork Drawings',
            'Point cloud to CAD Conversion'
          ],
          header: 'Our Industry Standards for Drafting Services',
          subContent: 'We ensure our drafting services meet the highest industry requirements, delivering accuracy, reliability, and compliance in every project.',
          items: [
            'ISO',
            'ASME',
            'ASTM',
            'AISC',
            'ANSI',
            'DIN',
            'BS',
            'JIS',
            'NFPA',
            'Eurocode (EN)'
          ],
        }
      ]
    },
    {
      name: 'Structural Drafting Services',
      details: [
        {
          mainContent: 'Our pre-approved vendors provide precise and detailed structural drafting services for all types of projects, small to large commercial buildings. With expertise in prefabricated structures and complex designs, they ensure clarity at every stage.',
          listItems: [
            'GA Drawings',
            'Connection Sketches',
            'Shop and Fabrication Drawings',
            'Erection Drawings',
            'Anchor Bolt Plans and Details',
            'Single Part/Fittings Drawings'
          ],
          header: 'Our Industry Standards for Drafting Services',
          subContent: 'We ensure our drafting services meet the highest industry requirements, delivering accuracy, reliability, and compliance in every project.',
          items: [
            'ISO',
            'ASME',
            'ASTM',
            'AISC',
            'ANSI',
            'DIN',
            'BS',
            'JIS',
            'NFPA',
            'Eurocode (EN)'
          ],
        }
      ]
    },
    {
      name: 'MEP Drafting Services',
      details: [
        {
          mainContent: 'Connect with vendors offering precise and affordable MEP drafting services. From plumbing layouts to HVAC shop drawings, our platform ensures your MEP projects are handled by professionals who know international standards and codes.',
          listItems: [
            'Electrical Power Layouts',
            'Plumbing Drafting and Drainage Plans',
            'HVAC Shop and Fabrication Drawings',
            'Isometric Piping Drawings'
          ],
          header: 'Our Industry Standards for Drafting Services',
          subContent: 'We ensure our drafting services meet the highest industry requirements, delivering accuracy, reliability, and compliance in every project.',
          items: [
            'ISO',
            'ASME',
            'ASTM',
            'AISC',
            'ANSI',
            'DIN',
            'BS',
            'JIS',
            'NFPA',
            'Eurocode (EN)'
          ],
        }
      ]
    },
    {
      name: 'Façade Drafting Services',
      details: [
        {
          mainContent: 'Get perfect and cost effective Façade drafting services from BuildTwin’s vendor network. Whether it’s curtain walls or skylight detailing, our platform connects you with experts who deliver high quality outputs using leading profile systems.',
          listItems: [
            'Curtain Wall Detailing',
            'Structural Glazing and Rainscreen Detailing',
            'Cladding and ACP Detailing',
            'Canopy, Skylight, and Louver Detailing'
          ],
          header: 'Our Industry Standards for Drafting Services',
          subContent: 'We ensure our drafting services meet the highest industry requirements, delivering accuracy, reliability, and compliance in every project.',
          items: [
            'ISO',
            'ASME',
            'ASTM',
            'AISC',
            'ANSI',
            'DIN',
            'BS',
            'JIS',
            'NFPA',
            'Eurocode (EN)'
          ],
        }
      ]
    },
    {
      name: 'Millwork Drafting Services',
      details: [
        {
          mainContent: 'BuildTwin connects you with vendors who provide accurate and detailed millwork drafting services for wood, glass and hybrid products. From shop drawings to assembly details, our platform ensures every millwork project is precise and compliant.',
          listItems: [
            'Custom Millwork Shop Drawings',
            'Assembly and Installation Details',
            'Bills of Materials (BoM)',
            'Modular and Furniture Drafting'
          ],
          header: 'Our Industry Standards for Drafting Services',
          subContent: 'We ensure our drafting services meet the highest industry requirements, delivering accuracy, reliability, and compliance in every project.',
          items: [
            'ISO',
            'ASME',
            'ASTM',
            'AISC',
            'ANSI',
            'DIN',
            'BS',
            'JIS',
            'NFPA',
            'Eurocode (EN)'
          ],
        }
      ]
    },
    {
      name: 'Mechanical Drafting Services',
      details: [
        {
          mainContent: 'Get vendors for high precision mechanical drafting services for your project. From machine parts to heavy equipment designs, our platform ensures smooth collaboration and high quality outputs.',
          listItems: [
            'Machine Component Drafting',
            'Sheet Metal Design and Drafting',
            'Assembly and Exploded View Drawings',
            'Product Design and Development Drafting'
          ],
          header: 'Our Industry Standards for Drafting Services',
          subContent: 'We ensure our drafting services meet the highest industry requirements, delivering accuracy, reliability, and compliance in every project.',
          items: [
            'ISO',
            'ASME',
            'ASTM',
            'AISC',
            'ANSI',
            'DIN',
            'BS',
            'JIS',
            'NFPA',
            'Eurocode (EN)'
          ],
        }
      ]
    }

  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  get activeContent() {
    return this.precastArray[this.activeTab];
  }

}
