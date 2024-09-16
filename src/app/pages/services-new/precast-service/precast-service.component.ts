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
      name: 'Precast shop tickets/Drawings',
      details: [
        {
          mainContent: 'Precast shop tickets, also known as precast shop drawings, are essential for the accurate fabrication and installation of precast concrete elements. These detailed drawings include specifications, dimensions, reinforcement details, and connection points, ensuring the seamless assembly of precast components. Precast shop tickets streamline the manufacturing process by providing precise, easy-to-follow guidelines for production teams. They help reduce errors, improve project efficiency, and ensure compliance with structural requirements. Whether for commercial or residential construction, high-quality precast shop drawings enhance project accuracy and speed. Trust expert precast detailing services to deliver reliable, cost-effective solutions for your construction needs.',
          header: 'Industry standards we follow',
          subContent: 'We follow most of the standards used globally.  We preserve the tailored construction standards that are followed by the client within the scope keeping up the rules set for advanced designing, detailing and construction.',
          items: [
            'AS 3850.1',
            'ACI 318',
            'IS 15917',
            'BS 8297',
            'EN 13369'
          ],
        }
      ]
    },
    {
      name: 'Uitechnik/Machine file',
      details: [
        {
          mainContent: 'Uitechnik/Machine file, also known as precast shop drawings, are essential for the accurate fabrication and installation of precast concrete elements. These detailed drawings include specifications, dimensions, reinforcement details, and connection points, ensuring the seamless assembly of precast components. Precast shop tickets streamline the manufacturing process by providing precise, easy-to-follow guidelines for production teams. They help reduce errors, improve project efficiency, and ensure compliance with structural requirements. Whether for commercial or residential construction, high-quality precast shop drawings enhance project accuracy and speed. Trust expert precast detailing services to deliver reliable, cost-effective solutions for your construction needs.',
          header: 'Uitechnik/Machine file',
          subContent: 'We follow most of the standards used globally.  We preserve the tailored construction standards that are followed by the client within the scope keeping up the rules set for advanced designing, detailing and construction.',
          items: [
            'AS 3850.1',
            'ACI 318',
            'IS 15917',
            'BS 8297',
            'EN 13369'
          ],
        }
      ]
    },
    {
      name: 'GA/Erection Drawing',
      details: [
        {
          mainContent: 'GA/Erection Drawing, also known as precast shop drawings, are essential for the accurate fabrication and installation of precast concrete elements. These detailed drawings include specifications, dimensions, reinforcement details, and connection points, ensuring the seamless assembly of precast components. Precast shop tickets streamline the manufacturing process by providing precise, easy-to-follow guidelines for production teams. They help reduce errors, improve project efficiency, and ensure compliance with structural requirements. Whether for commercial or residential construction, high-quality precast shop drawings enhance project accuracy and speed. Trust expert precast detailing services to deliver reliable, cost-effective solutions for your construction needs.',
          header: 'GA/Erection Drawing',
          subContent: 'We follow most of the standards used globally.  We preserve the tailored construction standards that are followed by the client within the scope keeping up the rules set for advanced designing, detailing and construction.',
          items: [
            'AS 3850.1',
            'ACI 318',
            'IS 15917',
            'BS 8297',
            'EN 13369'
          ],
        }
      ]
    },
    {
      name: 'BOM/Quantity Take-Offs',
      details: [
        {
          mainContent: 'BOM/Quantity Take-Offs, also known as precast shop drawings, are essential for the accurate fabrication and installation of precast concrete elements. These detailed drawings include specifications, dimensions, reinforcement details, and connection points, ensuring the seamless assembly of precast components. Precast shop tickets streamline the manufacturing process by providing precise, easy-to-follow guidelines for production teams. They help reduce errors, improve project efficiency, and ensure compliance with structural requirements. Whether for commercial or residential construction, high-quality precast shop drawings enhance project accuracy and speed. Trust expert precast detailing services to deliver reliable, cost-effective solutions for your construction needs.',
          header: 'BOM/Quantity Take-Offs',
          subContent: 'We follow most of the standards used globally.  We preserve the tailored construction standards that are followed by the client within the scope keeping up the rules set for advanced designing, detailing and construction.',
          items: [
            'AS 3850.1',
            'ACI 318',
            'IS 15917',
            'BS 8297',
            'EN 13369'
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
