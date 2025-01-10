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
          mainContent: 'We connect you with expert vendors who specialize in precast panel detailing and wall panel detailing, ensuring compliance with varied code practices. From cladding panel detailing drawings to erection drawings, our platform facilitates the entire process, including the management of handling systems for precast panels.',
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
          mainContent: 'Our vendors deliver detailed fabrication drawings that guide your production process from start to finish, ensuring precision in the fabrication of precast concrete elements and structural components.',
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
          mainContent: 'Utilize detailed bar bending schedules for precast elements, meticulously prepared to specify the size, shape, and bending details required for each rebar, enhancing the structural integrity of your precast constructions.',
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
          mainContent: 'Receive a detailed list of cast-in components essential for the stability and integration of precast concrete elements within your projects, including lifting leg locations and grout ferrule locations.',
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
          mainContent: 'Experience optimized resource management with our detailed quantity take-offs, ensuring timely delivery and precise budgeting for precast detailing projects.',
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
      name: 'Machine Files',
      details: [
        {
          mainContent: 'Leverage our digital machine files for automated project management, enhancing transparency and accuracy throughout the project lifecycle.',
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
