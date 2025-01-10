import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steel-detailing-usa-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrls: ['../../bim/precast-service/precast-service.component.scss','./precast-service.component.scss']
})
export class SteelDetailingUsaPrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'Shop drawings drafting',
      details: [
        {
          mainContentHead: '',
          mainContent: 'Shop drawings are crucial to the planning and execution phase of steel detailing services. With BuildTwin, you work with expert vendors from the U.S. for steel detailing services, so you get precise steel shop drawings and fast production. From steel beam detailing to connection design, our platform uses the latest software to streamline the process so your steel fabrication drawings are created to improve project accuracy and fabrication quality. Plus, live tracking lets you monitor steelwork drawings and steel frame detailing in real-time, reducing delays and improving efficiency.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: `We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:`,
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
          ],
        }
      ]
    },
    {
      name: '2D and 3D Modeling',
      details: [
        {
          mainContentHead: '',
          mainContent: 'With real-time collaboration enabled, you can improve 2D and 3D modeling for steel detailing services. BuildTwin’s CDE integration streamlines workflows so your 2D and 3D structural steel models are created on time. This not only saves overall time but also quality control throughout the project lifecycle. Using tools like Tekla Structures, Autodesk Revit and Advance Steel for 3D modeling ensures steel construction excellence.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
          ],
        }
      ]
    },
    {
      name: 'Miscellaneous steel detailing',
      details: [
        {
          mainContentHead: '',
          mainContent: 'Just like primary structural elements like beams and columns, our vendors deliver high-level precision for other steel detailing specializations. Whether it’s stairs, handrails or supports, our steel detailers make sure small functional steel components fit within the main structure. Our platform gives you minute by minute updates on your project progress and you are part of the process to watch over the quality and efficiency till the end.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
          ],
        }
      ]
    },
    {
      name: 'Tekla steel detailing',
      details: [
        {
          mainContentHead: '',
          mainContent: 'To ensure global and American standards, we use the latest software like Tekla steel detailing. All our vetted vendors are chosen based on their experience, competence and proficiency in software driven processes so you work with experts for your projects. With a combination of technology, stage by stage precision and optimized workflows our platform gives you transparency to make informed decisions at every stage of your steel detailing project.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
          ],
        }
      ]
    },
    {
      name: 'Quantity take-off Steel',
      details: [
        {
          mainContentHead: '',
          mainContent: 'We ensure timely delivery by optimizing resource utilization and reducing effort. Our systematic approach to quantity take-offs in steel detailing starts with a quantity review. Once components and finishes are verified our platform generates systematic quantity take-offs and tracks every stage of the project for your convenience. These take-offs are then checked for American compliance and industry standards so you get precision throughout your project lifecycle.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
          ],
        }
      ]
    },
    {
      name: 'Steel drafting',
      details: [
        {
          mainContentHead: '',
          mainContent: 'BuildTwin solves the problems of steel drafting like reducing manual errors and increasing efficiency. Our platform integrates with your existing workflow so you can work uninterrupted with expert vendors. This centralized project management system reduces cost and improves outcome so it’s perfect for steel detailing in the USA. Our vendors have Autodesk Revit, Advance Steel and other tools to deliver drawings that meet project requirements.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
          ],
        }
      ]
    },
    {
      name: 'Steel frame detailing',
      details: [
        {
          mainContentHead: '',
          mainContent: 'Coordinating multiple stakeholders, project timelines and quality can make a big difference in steel frame detailing for you. Our CDE integration does that and more and our pre-vetted vendors from the USA give you the best global options to work with. These along with American standards & codes give you a one stop platform for steel frame detailing services that is quality and precision un-compromised.',
          header: 'Our industry standards for structural steel detailing services in the USA',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
          items: [
            'AISC: American Institute of Steel Construction',
            'ASTM: American Society for Testing and Materials',
            'NISD: National Institute of Steel Detailing',
            'ACI: American Concrete Institute',
            'RCSC: Research Council on Structural Connections',
            'CRSI: Concrete Reinforcing Steel Institute',
            'AWS: American Welding Society'
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
