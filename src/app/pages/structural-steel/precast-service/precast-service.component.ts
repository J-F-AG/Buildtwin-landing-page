import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-steel-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrl: './precast-service.component.scss'
})
export class StructuralSteelPrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'Shop drawings',
      details: [
        {
          mainContent: 'Being essential to the planning and ideation stages in structural steel detailing services, shop drawings cannot compromise on accuracy. Through your own chosen vendors from our pool of vetted experts, you get not only quality shop drawings but efficiency throughout the project. Our platform streamlines everything from production of precise steel building wall sections, steel beam and steel connection detailing using the latest software. This ensures that your steel drafting, steel fabrication drawings, and other miscellaneous steel detailing are created to enhance project accuracy and seamless fabrication. Moreover, the live-tracking feature allows you to manage steelwork drawings, steel frame detailing, and steel stair detailing on schedule, thereby reducing delays, and improving efficiency.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
      name: '2D and 3D modelling',
      details: [
        {
          mainContent: 'With real-time communication enabled across your teams, you have the ability to continually enhance the precision of 2D and 3D modelling for structural steel detailing services. Our CDE integration is designed to elevate this by seamlesslyallowing you to plug in your existing workflows and take the 2D and 3D modelling process forward, without any gaps or delays as opposed to conventional collaborative approaches. This not only optimizes the overall timeline, but also ensures quality control during the end-to-end execution of your project.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
      name: 'Miscellaneous steel detailing',
      details: [
        {
          mainContent: 'Just as with primary structural elements such as beams and columns, our select vendors ensure the same level of detail and accuracy for miscellaneous steel detailing. Along with our global compliance codes in place, you can rest assuredthat even smaller, functional parts such as stairs, handrails, ladders, platforms, gratings, and supports are detailed for proper fit and seamless integration with the main structure. By having every minute update on your project’s progress, you remain integral in contributing to the overall quality and efficiency till the end.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
      name: 'Tekla steel detailing',
      details: [
        {
          mainContent: 'One way we ensure global standardization in our structural steel detailing services is cutting-edge software such as Tekla steel detailing. All our vendors are chosen based on their experience, competency, and proficiency in software-driven processes, so that you collaborate only with experts for your projects. With a combination of superior technology, stage-by-stage precision and optimized workflows, our platform fosters transparency to let you make informed decisions at every step of your project.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
      name: 'Quantity take-off',
      details: [
        {
          mainContent: 'Our platform ensures on-time deliveries by continuously optimizing resources and reducing efforts. In structural steel detailing, this process starts with reviewing quantity take-offs for accuracy. Once the components and finishing materials are verified, our platform generates systematic quantity take-offs, carefully tracking every stage of the project for your easy access. These take-offs are then cross-checked for compliance and quality, ensuring the highest level of precision throughout your project lifecycle.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
      name: 'Steel drafting',
      details: [
        {
          mainContent: 'Our platform tackles the primary concerns of steel drafting, which are to reducemanual errors and improve efficiency. By giving you the ability to plug in your existing workflow smoothly into the system, your team of engineers and contractors can collaborate uninterrupted with expert vendors on our platform to give way to a centrally aligned project management system for your structural steel detailing needs – ultimately leading to cost savings and higher results.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
      name: 'Steel frame detailing',
      details: [
        {
          mainContent: 'An integrated approach in coordinating multiple stakeholders, managing projecttimelines, and ensuring quality can greatly elevate steel frame detailing services for you. Our CDE integration does exactly that and more, while our pre-vetted vendors provide you with the top global choices to work with. These, together with global compliance standard codes, ultimately provide you with an all-encompassing platform for steel frame detailing services that are uncompromised in quality and accuracy.',
          header: 'Our industry standards for structural steel detailing services',
          subContent: 'We make sure our structural steel detailing services meet the industry requirements that ensure durability in structures. For this, we adhere to global standard codes such as:',
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
