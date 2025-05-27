import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-service',
  // standalone: true,
  // imports: [],
  templateUrl: './cad-service.component.html',
  styleUrls: ['../../bim/precast-service/precast-service.component.scss','./cad-service.component.scss']
})
export class CadServiceComponent implements OnInit {
  
  title:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: '2D Drafting Services',
      details: [
        {
          mainContent: 'Handpick vendors who specialize in creating detailed floor plans, elevations, sections, as-built drawings, and layout designs. Leveraging the latest software and adhering to global standards, these vendors can convert your rough sketches into precise CAD Drawings.',
          listItems: [
            'Floor Plans',
            'Elevations & Sections',
            'As-Built Drawings',
            'Layout Designs'
          ],
          header: 'Our Industry Standards for CAD Services',
          subContent: '',
          items: [
            'ISO 19650',
            'ANSI Standards',
            'BS 8888',
            'ASME Y14.5',
            'AISC Standards',
            'ISO 13567',
            'NFPA Standards',
            'AWS D1.1',
            'IEC Standards',
            'ACI Standards',
            'DIN Standards',
            'OSHA Standards'
          ],
        }
      ]
    },
    {
      name: '3D Modelling Services',
      details: [
        {
          mainContent: 'With BuildTwin’s 3D modeling services, you can choose from a pool of experts to create highly detailed and accurate models for your projects. Whether it is for buildings, structures or mechanical components, our vendors provide realistic models to help you visualise your design before execution. This means better planning, fewer errors and smoother project workflow, so you can move forward with clarity and precision.',
          listItems: [
            'Architectural 3D Modeling',
            'Structural 3D Modeling',
            'Mechanical 3D Modeling',
            '3D Rendering and Visualization'
          ],
          header: 'Our Industry Standards for CAD Services',
          subContent: '',
          items: [
            'ISO 19650',
            'ANSI Standards',
            'BS 8888',
            'ASME Y14.5',
            'AISC Standards',
            'ISO 13567',
            'NFPA Standards',
            'AWS D1.1',
            'IEC Standards',
            'ACI Standards',
            'DIN Standards',
            'OSHA Standards'
          ],
        }
      ]
    },
    {
      name: 'Structural CAD Services',
      details: [
        {
          mainContent: 'Get detailed and accurate drawings  for your projects. With BuildTwin, you can handpick vendors who provide clear plans for foundations, framing, and other structural elements. Compare quotes, review expertise, and choose the right vendor to bring your project to life.',
          listItems: [
            'Foundation Design',
            'Framing Plans',
            'Roof Layouts',
            'Structural Reinforcement Detailing'
          ],
          header: 'Our Industry Standards for CAD Services',
          subContent: '',
          items: [
            'ISO 19650',
            'ANSI Standards',
            'BS 8888',
            'ASME Y14.5',
            'AISC Standards',
            'ISO 13567',
            'NFPA Standards',
            'AWS D1.1',
            'IEC Standards',
            'ACI Standards',
            'DIN Standards',
            'OSHA Standards'
          ],
        }
      ]
    },
    {
      name: 'Millwork Drafting Services',
      details: [
        {
          mainContent: 'Connect with millwork specialists for 2D shop drawings and Bill of Materials for communication between architects, contractors and manufacturers. Our vendors follow global standards like AWI and NKBA. They deliver designs for wood, glass and hybrid millwork products using the latest CAD software and automation tools.',
          listItems: [
            'Custom Millwork Shop Drawings',
            'Bill of Materials (BoM) Preparation',
            'Wood, Glass, and Hybrid Millwork Drafting',
            '3D Modeling and Visualization for Millwork Designs'
          ],
          header: 'Our Industry Standards for CAD Services',
          subContent: '',
          items: [
            'ISO 19650',
            'ANSI Standards',
            'BS 8888',
            'ASME Y14.5',
            'AISC Standards',
            'ISO 13567',
            'NFPA Standards',
            'AWS D1.1',
            'IEC Standards',
            'ACI Standards',
            'DIN Standards',
            'OSHA Standards'
          ],
        }
      ]
    },
    {
      name: 'Mechanical CAD services',
      details: [
        {
          mainContent: 'Connect with our pool of vendors for tailored Mechanical CAD services. From 2D drawings to 3D modeling, assembly modeling, surface modeling, GD&T, and sheet metal design, our vendors ensure accuracy and compliance with global standards.',
          listItems: [
            'Assembly Modeling',
            'Sheet Metal Design',
            'Complex Surface Modeling',
            'Geometric Dimensioning & Tolerancing (GD&T)'
          ],
          header: 'Our Industry Standards for CAD Services',
          subContent: '',
          items: [
            'ISO 19650',
            'ANSI Standards',
            'BS 8888',
            'ASME Y14.5',
            'AISC Standards',
            'ISO 13567',
            'NFPA Standards',
            'AWS D1.1',
            'IEC Standards',
            'ACI Standards',
            'DIN Standards',
            'OSHA Standards'
          ],
        }
      ]
    },
    {
      name: 'Shop Drawing Services',
      details: [
        {
          mainContent: 'BuildTwin connects you with vendors offering precise shop drawing services, including architectural, structural, MEP, HVAC, and façade drawings. These detailed drawings ensure compliance with design intent and global standards, aiding architects, fabricators, and contractors in efficient execution.',
          listItems: [
            'Architectural Shop Drawings',
            'Structural Shop Drawings',
            'MEP & HVAC Shop Drawings',
            'Façade Shop Drawings'
          ],
          header: 'Our Industry Standards for CAD Services',
          subContent: '',
          items: [
            'ISO 19650',
            'ANSI Standards',
            'BS 8888',
            'ASME Y14.5',
            'AISC Standards',
            'ISO 13567',
            'NFPA Standards',
            'AWS D1.1',
            'IEC Standards',
            'ACI Standards',
            'DIN Standards',
            'OSHA Standards'
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
