import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrls: ['../../bim/precast-service/precast-service.component.scss','./precast-service.component.scss']
})
export class PrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'Precast Shop Drawings',
      details: [
        {
          mainContent: 'With our ready pool of pre-qualified expert vendors, we ensure careful analysis of varied code practices before your precast drawings are generated. We provide a number of precast detailing drawings such as for cladding panel detailing drawings, shear walls panel detailing drawings, load-bearing panel detailing drawings, and formwork for cast concrete panel detailing drawings. Once the architectural plans are reviewed, we help you generate precast erection drawings, manage the handling systems of precast panels, and prepare shop tickets as well.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
      name: 'Fabrication Drawings',
      details: [
        {
          mainContent: 'BuildTwin vendors deliver high-quality fabrication drawings based on your design requirements, guiding the production process from start to finish. These drawings specify crucial details such as rebar detailing, connection points, and the placement of precast elements like beams, slabs, and walls. By ensuring accurate cutting, assembling, and finishing of structural elements, vendors streamline workflows to maximize production efficiency and minimize errors. Whether for double tee detailing, beam column detailing, or wall panel detailing, these drawings act as a foundation for flawless execution.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
      name: 'Bar Bending Schedules',
      details: [
        {
          mainContent: 'Through our expert vendors, we provide you a detailed list of not only the size, shape and length of each rebar but also the bending angles for pre-cast elements. Our vendors use the latest industry software, such as AutoCAD and Revit, for the bar bending schedules to ensure that every concrete casting meets its precise specifications. And, all of this is available for you to access easily on our platform.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
      name: 'List of Cast-In Components',
      details: [
        {
          mainContent: 'We provide a comprehensive list of cast-in components that are crucial for ensuring your pre-cast elements are well-integrated and installed with stability. These cast-in components include hollow core slabs, pre-cast concrete walls, pre-cast concrete beams and columns, pre-cast concrete slabs and planks, pre-cast concrete stairs, pre-cast concrete retaining walls, lifting leg locations, grout, and ferrule locations, among others.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
      name: 'Quantity Take-Offs',
      details: [
        {
          mainContent: 'Our platform constantly works to optimize resources, reduce efforts, and ensure timely deliveries. Our systematic quantity take-offs make this possible by carefully crossing every stage of the project. Once your structural drawings and shop drawings are reviewed for specifications, the pre-cast components and finishing materials are listed and itemized. These also include the measurements, exact quantities and volumes for each. The quantity take-off is then further cross-checked for compliance and accuracy.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
      name: 'Wall Panel Detailing',
      details: [
        {
          mainContent: 'Our platform connects you with vendors specializing in wall panel detailing for precast wall panels. From cladding panel detailing to load-bearing wall units, vendors provide precise drawings, including reinforcement layouts and connection points. Using AutoCAD, Revit, and Tekla Structures, they ensure alignment with erection drawings and handling systems, catering to residential, commercial, and industrial buildings.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
      name: 'Beam and Column Detailing',
      details: [
        {
          mainContent: 'BuildTwin vendors deliver detailed beam and column detailing for precast elements, including double tee beams and load-bearing columns. Services cover reinforcement layouts, grout ferrule locations, and connections. Vendors ensure compatibility with fabrication drawings, erection drawings, and international standards, enhancing the efficiency of your construction process.',
          header: 'Our industry standards for precast detailing services',
          subContent: 'BuildTwin ensures all precast detailing services meet stringent global standards that guarantee durability in precast structures. For this, we adhere to global standard codes such as:',
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
  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  get activeContent() {
    return this.precastArray[this.activeTab];
  }

}
