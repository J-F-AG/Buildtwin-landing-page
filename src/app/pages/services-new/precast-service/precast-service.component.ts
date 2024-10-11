import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrl: './precast-service.component.scss'
})
export class PrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'Pre-cast shop drawings',
      details: [
        {
          mainContent: 'With our ready pool of pre-qualified expert vendors, we ensure careful analysis of varied code practices before your pre-cast drawings are generated. We provide a number of pre-cast detailing drawings such as for cladding panel detailing drawings, shear walls panel detailing drawings, load-bearing panel detailing drawings, and formwork for cast concrete panel detailing drawings. Once the architectural plans are reviewed, we help you generate pre-cast erection drawings, manage the handling systems of pre-cast panels, and prepare shop tickets as well.',
          header: 'Our industry standards for pre-cast detailing services',
          subContent: 'We make sure our pre-cast detailing services meet the industry requirements that ensure durability in pre-cast structures. For this, we adhere to global standard codes such as:',
          items: [
            'ASTM',
            'ACI',
            'CRSI',
            'NZS',
            'AS',
            'BS',
            'Eurocode (EN)',
            'CSA',
            'DIN',
            'IS',
            'JIS',
            'SNI',
            'SANS'
          ],
        }
      ]
    },
    {
      name: 'Fabrication drawings',
      details: [
        {
          mainContent: 'Our vendors provide a thorough interpretation of your design specifications with fabrication drawings. These fabrication drawings act as the key to guiding your production process, ensuring accuracy in the cutting, assembling and finishing of structural elements. Be it for manufacturing components, specifying rebar placement, detailing connection points, or step-by-step installation, our fabrication drawings ensure that your entire production process becomes streamlined to provide maximum efficiency.',
          header: 'Our industry standards for pre-cast detailing services',
          subContent: 'We make sure our pre-cast detailing services meet the industry requirements that ensure durability in pre-cast structures. For this, we adhere to global standard codes such as:',
          items: [
            'ASTM',
            'ACI',
            'CRSI',
            'NZS',
            'AS',
            'BS'
          ],
        }
      ]
    },
    {
      name: 'Bar bending schedules',
      details: [
        {
          mainContent: 'Through our expert vendors, we provide you a detailed list of not only the size, shape and length of each rebar, but also the bending angles for pre-cast elements. Our vendors use the latest industry software, such as AutoCAD and Revit, for the bar bending schedules to ensure that every concrete casting meets its precise specifications. And, all of this is available for you to access easily on our platform.',
          header: 'Our industry standards for pre-cast detailing services',
          subContent: 'We make sure our pre-cast detailing services meet the industry requirements that ensure durability in pre-cast structures. For this, we adhere to global standard codes such as:',
          items: [
            'ASTM',
            'ACI',
            'CRSI',
            'NZS',
            'AS',
            'BS'
          ],
        }
      ]
    },
    {
      name: 'List of cast-in components',
      details: [
        {
          mainContent: 'We provide a comprehensive list of cast-in components that are crucial for ensuring your pre-cast elements are well integrated and installed with stability. These cast-in components include hollow core slabs, pre-cast concrete walls, pre-cast concrete beams and columns, pre-cast concrete slabs and planks, pre-cast concrete stairs, pre-cast concrete retaining walls, lifting leg locations, grout, and ferrule locations, among others.',
          header: 'Our industry standards for pre-cast detailing services',
          subContent: 'We make sure our pre-cast detailing services meet the industry requirements that ensure durability in pre-cast structures. For this, we adhere to global standard codes such as:',
          items: [
            'ASTM',
            'ACI',
            'CRSI',
            'NZS',
            'AS',
            'BS'
          ],
        }
      ]
    },
    {
      name: 'Quantity take-offs',
      details: [
        {
          mainContent: 'Our platform constantly works to optimize resources, reduce efforts, and ensure timely deliveries. Our systematic quantity take-offs make this possible by carefully crossing every stage of the project. Once your structural drawings and shop drawings are reviewed for specifications, the pre-cast components and finishing materials are listed and itemized. These also include the measurements, exact quantities and volumes for each. The quantity take-off is then further cross-checked for compliance and accuracy.',
          header: 'Our industry standards for pre-cast detailing services',
          subContent: 'We make sure our pre-cast detailing services meet the industry requirements that ensure durability in pre-cast structures. For this, we adhere to global standard codes such as:',
          items: [
            'ASTM',
            'ACI',
            'CRSI',
            'NZS',
            'AS',
            'BS'
          ],
        }
      ]
    },
    {
      name: 'Machine files',
      details: [
        {
          mainContent: 'We automate your entire project management with our digital machine files. This way, you get to track your project at every stage, monitor the progress, and get maximum transparency. Not only does this reduce the overall timeline, but also minimizes human effort and ensures the most accurate execution.',
          header: 'Our industry standards for pre-cast detailing services',
          subContent: 'We make sure our pre-cast detailing services meet the industry requirements that ensure durability in pre-cast structures. For this, we adhere to global standard codes such as:',
          items: [
            'ASTM',
            'ACI',
            'CRSI',
            'NZS',
            'AS',
            'BS'
          ],
        }
      ]
    },
  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  get activeContent() {
    return this.precastArray[this.activeTab];
  }

}
