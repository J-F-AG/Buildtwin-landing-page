import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bim-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrl: './precast-service.component.scss'
})
export class BimPrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'BIM modelling',
      details: [
        {
          mainContent: 'With our automated platform, you can manage BIM (Building Information Modelling) services for your project needs far more efficiently. Not only are your BIM modelling services streamlined, you also get to easily create detailed 3D models complete with material, cost, and scheduling information. While our pre-qualified vendors ensure expertise, our platform gives you precision and consistency via automation, thereby reducing manual efforts and errors. With ready access to any part of the project lifecycle, be it the history, ongoing progress or upcoming plans, you get the ability to keep track of any point in the timeline, anywhere, any time.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: '3D rendering',
      details: [
        {
          mainContent: 'As opposed to traditional BIM services, when it comes to 3D rendering on our platform, you get access to detailed, realistic visuals of your project based on the BIM model. This helps you easily visualize the 3D rendering, allows for quicker comparisons between design options, and enables faster decision-making. By facilitating seamless collaboration between architects, engineers, and contractors, the platform reduces gaps and improves communication. Having automated 3D renderings also benefits by saving costs and potential delays, which in turn makes the overall project more efficient.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'BIM coordination',
      details: [
        {
          mainContent: 'As BIM coordination involves alignment between all vendors and stakeholders of your project, our platform takes this process to the next level. By having shared access, yourteams can review designs, materials, and timelines, and reduce on-site issues. This is the perfect way to optimize your BIM coordination where not only do you get to ensure that cross-functional communication is seamless, but your overall productivity gets a significant boost.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Scan to BIM',
      details: [
        {
          mainContent: 'While our certified vendors ensure high-quality scans to BIM, our platform automates the conversion of those scans to accurate BIM models. This gives you enhanced projectoutcomes by having the top global vendors, who use only the latest technology, and comply with the global standards we have laid out. By having all these checklists already in place, you get the most out of our services, with minimal efforts on your and your teams’ ends.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'MEP BIM',
      details: [
        {
          mainContent: 'MEP BIM (Mechanical, Electrical, Plumbing in Building Information Modelling) becomes a lot more precise and seamless with our platform. With so many components involved in MEP BIM, it can become tricky to go back to designs, revisions, or reports during the course of a project. Our cloud-backed documentation, which even provide summarized emails, allows you to go back to a specific detail that you want to access within seconds. With such attention to detail that goes into the minutest level of the processes involved, you have the freedom to switch between previous and ongoing project files, without having to invest in any additional resources or time.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Architectural BIM',
      details: [
        {
          mainContent: 'While assessing aesthetics, functionality, and spatial alignments in your architectural BIM, having a one-stop platform to design, coordinate and accelerate the entire process is an asset. That is what our platform brings to the table, with vendors who canhelp you and your teams visualize designs more effectively via integrated workflows. By provide you with detailed architectural BIMs, tools to facilitate clash detection and improve coordination, and ultimately elevate project progress and outcomes, you get tobe intrinsically involved from the beginning to execution of your projects.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Structural BIM',
      details: [
        {
          mainContent: 'For the most accurate structural designs, the key is to have every detail of the structural BIM accessible in real-time for your engineers, irrespective of location. Our platform gives them that and more by bringing every stakeholder – structural engineer,architect, and contractor, among others – together to make the best decisions for accelerated design iterations, analysis of structural integrity, and optimal material usage, while complying to global standards.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Facade BIM',
      details: [
        {
          mainContent: 'With ready vendors on board for your facade BIM process, you get qualified contractors who can quickly provide estimates and enable timely project execution. By monitoring progress in real time, you and your stakeholders together can ensure that timelines and budgets are adhered to. For this, our CDE integration is a key factor. It facilitates seamless data sharing and collaboration amongst all parties, minimizing gaps and improving outcomes. With all legal risks and compliances in check, your designs meet local regulations and global standards, resulting in overall project success every time.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Revit BIM',
      details: [
        {
          mainContent: 'Staying updated is indispensable when it comes to technology, especially to maintain global industry relevance. Our pre-qualified vendors use the latest industry software to give you the most up-to-date technological edge from planning to execution, such as with Revit BIM. This ensures that the designs generated are competent, provide accuracy, and lead to optimal outcomes. Our CDE integration allows architects, engineers, contractors, and other stakeholders, from teams on both ends to work seamlessly during the Revit BIM process.',
          header: 'Our industry standards for BIM services',
          subContent: 'We make sure our BIM services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
