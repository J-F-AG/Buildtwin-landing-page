import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bim-usa-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrl: './precast-service.component.scss'
})
export class BimUsaPrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'BIM modeling',
      details: [
        {
          mainContentHead: 'Efficient management of BIM (Building Information Modeling) services for your project needs.',
          mainContent: 'Our automated platform enhances the management of BIM services by simplifying the BIM modeling process. This allows you to create detailed 3D models, including material, cost, and scheduling information, streamlining the entire construction project lifecycle. BIM modeling services are further enhanced by our pre-qualified vendors who ensure top-notch expertise, helping you reduce manual efforts and errors in the design process. With ready access to any part of the project lifecycle, you can track project history, ongoing progress, and future plans in real time, giving you full visibility and control of every aspect of the project. This allows you to efficiently manage BIM modeling and ensure the successful delivery of your AEC projects.',
          header: 'Our industry standards for BIM services',
          subContent: `We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:`,
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: '3D rendering',
      details: [
        {
          mainContentHead: 'Enhanced visualization and decision-making through automated 3D rendering.',
          mainContent: 'Unlike traditional BIM services, 3D rendering on our platform gives you access to high-quality, realistic visuals based on the BIM model. This empowers project teams to visualize 3D rendering clearly, compare various design options, versions, and make informed decisions quickly. Seamless collaboration between architects, engineers, and contractors fosters better communication, reduces errors, and improves project efficiency. Automated 3D rendering results in cost savings and reduced delays, directly enhancing the overall project efficiency and delivering optimal outcomes for your AEC projects.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'BIM coordination',
      details: [
        {
          mainContentHead: 'Optimizing BIM coordination to ensure seamless project execution',
          mainContent: 'BIM coordination involves aligning all vendors and stakeholders within the project. BuildTwin’s platform allows teams to collaborate effectively by providing shared access to designs, materials, timelines, and other essential project data. This ensures that all project participants are on the same page, leading to fewer on-site issues and faster decision-making. By optimizing BIM coordination, the platform ensures better communication, reduces the risk of errors, and boosts overall project management and productivity, helping deliver your construction projects on time and within budget.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'Scan to BIM',
      details: [
        {
          mainContentHead: 'Accurate, high-quality Scan to BIM services for improved project outcomes.',
          mainContent: 'BuildTwin provides Scan to BIM services that automatically convert scanned data into accurate BIM models, reducing manual efforts and errors. With certified vendors using the latest technology, our platform ensures that your BIM models are built with high precision and compliance to global standards. This service guarantees enhanced project outcomes by ensuring that the Scan to BIM process is as seamless and efficient as possible, benefiting your AEC projects and reducing the time and effort required for creating detailed BIM models.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'MEP BIM',
      details: [
        {
          mainContentHead: 'Precision in MEP BIM (Mechanical, Electrical, Plumbing) design and documentation',
          mainContent: 'The complexity of MEP BIM can be challenging, but BuildTwin’s platform makes it simpler and more accurate. With numerous components involved, our platform allows you to access and revise MEP BIM designs, reports, and revisions effortlessly. Cloud-backed documentation and real-time tracking make it easy for you to revisit specific details at any time, increasing accuracy and saving resources. Whether you’re working on MEP BIM designs, revisions, or reports, our platform simplifies the process, ensuring efficiency and reliability for your construction projects.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'Architectural BIM',
      details: [
        {
          mainContentHead: 'Streamline the design process with integrated Architectural BIM services.',
          mainContent: 'BuildTwin’s platform facilitates Architectural BIM by integrating design, coordination, and execution into one centralized space. With architectural BIM, you can evaluate aesthetics, functionality, and spatial alignments in one place. The platform enhances BIM coordination, enables clash detection, and accelerates the design process, ultimately improving project progress. By using BuildTwin’s platform, teams can visualize designs more effectively and streamline the entire architectural BIM process, from conception to execution, ensuring better project outcomes.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'Structural BIM',
      details: [
        {
          mainContentHead: 'Real-time access to Structural BIM for optimal decision-making.',
          mainContent: 'Accurate Structural BIM designs are crucial for the success of any construction project. BuildTwin’s platform offers real-time access to all structural BIM data for engineers and other stakeholders, enabling faster decision-making and better collaboration. Whether you are working on structural analysis, material usage, or design iterations, the platform’s integrated workflow supports seamless project execution. By utilizing Structural BIM, engineers, architects, and contractors can collaborate more effectively, improving structural integrity, optimizing materials, and adhering to global standards for AEC projects.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'Facade BIM',
      details: [
        {
          mainContentHead: 'Streamlined Facade BIM for efficient project execution.',
          mainContent: 'Facade design is critical for the success of a construction project, and BuildTwin’s platform makes the Facade BIM process more efficient. With qualified contractors ready to provide quick estimates, you can ensure timely project execution. The platform integrates CDEs (Common Data Environments), facilitating seamless data sharing and communication among all parties involved. Real-time tracking ensures that timelines and budgets are adhered to, and with all legal and compliance checks in place, your Facade BIM designs meet local regulations and global standards, leading to successful AEC project delivery.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
          ],
        }
      ]
    },
    {
      name: 'Revit BIM',
      details: [
        {
          mainContentHead: 'Utilize Revit BIM for optimal design outcomes in your AEC projects.',
          mainContent: 'Revit BIM is essential for maintaining technological relevance in the AEC industry. BuildTwin’s platform integrates Revit BIM services to ensure the latest industry software and tools are used for design and execution. This ensures that the designs generated are accurate, meet global standards, and lead to successful project outcomes. Our CDE integration facilitates smooth collaboration among architects, engineers, and contractors during the Revit BIM process, ensuring that every aspect of the project is executed flawlessly.',
          header: 'Our industry standards for BIM services',
          subContent: 'We commit to the highest industry standards, ensuring durability and compliance in all our BIM services, particularly in rebar structures, by adhering to global standard codes and American codes such as:',
          items: [
            'ASTM (American Society for Testing and Materials)',
            'ACI (American Concrete Institute)',
            'CRSI (Concrete Reinforcing Steel Institute)',
            'NISD (Institute of Steel Detailing)',
            'RCSC (Research Council on Structural Connections)'
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
