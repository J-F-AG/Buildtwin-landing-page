import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rebar-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrls: ['../../bim/precast-service/precast-service.component.scss','./precast-service.component.scss']
})
export class RebarPrecastServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  precastArray = [
    {
      name: 'Rebar shop drawings',
      details: [
        {
          mainContent: 'Our certified vendors provide you with rebar shop drawings that are not only detailed, but accurate enough to provide your team with the exact size, shape, quantity, and arrangement of rebars within concrete structures. These rebar drawings are extensive to the point of including bar sizes, lengths, bending details, hooks, and bar marks - making for the perfect solution in optimizing efficiency and safety for buildings, bridges, foundations, and similar projects.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: '3D modelling',
      details: [
        {
          mainContent: 'While our rebar shop drawings are more technical and actionable for on-site execution, our 3D modelling provide you with visual layouts for rebar placementwithin the structure. The 2D rebar detailing and 3D rebar detailing, designed by our top-rated professionals, give you flat and three-dimensional representations respectively, to help you visualize the arrangement of rebars. This way, we makesure any clashes can be better detected so that there is minimal room for potential errors during construction.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Bar bending schedules',
      details: [
        {
          mainContent: 'With the bar bending schedules provided by your chosen vendors, you get a complete breakdown of rebar specifications, including the size, shape, length, and exact bending angles. Using cutting-edge software like AutoCAD and Revit, our vendors generate accurate bar bending schedules to guarantee error-free concrete casting. And, our ready-to-access, seamless platform makes sure you are privy to every critical information about the bar bending schedules of your project, whenever you need.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Retaining walls',
      details: [
        {
          mainContent: 'One of the areas where our rebar detailing services play a crucial role is retaining walls. The end-to-end rebar detailing services accessible through our platform cover everything from ensuring the retaining wall’s durability, prevention of cracks, and compliance with engineering standards. This way, youcan rest assured that your retaining walls are enhanced with the kind of structural integrity that allows withstanding loads and adverse environmental conditions.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Footing details',
      details: [
        {
          mainContent: 'Our accurate rebar details ensure that the foundation of your building’s load is evenly distributed on the ground, eliminating structural uncertainties. With our platform’s collaborative nature, your team can get real-time access to quickly generate, upload, review, or revise rebar footing details. This allows for efficientcoordination between contractors and stakeholders while saving time and cost in construction.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Foundation details',
      details: [
        {
          mainContent: 'Through our comprehensive platform, you can easily share foundation drawings, generate rebar schedules, and collaborate in real-time with vendors, engineers, fabricators, and contractors. This efficient project management setup allows for the exchange of accurate information, reduces manual errors, and in turn speeds up the overall project timeline. Well-planned foundation details are crucial to streamlining the execution process of every construction project.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'As-built drawings',
      details: [
        {
          mainContent: 'Even if you wish to enhance a previously completed project, our platform is well-equipped to serve you. With as-built drawings, you can get our vendors to provide you with a detailed and accurate representation of the rebar detailing, which you can document for the future. By giving you ready access to any changes made during the construction process, the as-built drawings on our platform allow you to compare them with the original design plans. This is your perfect solution for documenting as-built drawings for future maintenance or renovation.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
      name: 'Concrete joint and slab',
      details: [
        {
          mainContent: 'Rebar detailing for concrete joint and slab is a lot more efficient with our one-stop platform. Components like concrete joint and slab being critical within rebar detailing services, our platform eliminates discrepancies between stakeholders by providing a clear picture of the design and execution of these elements. By helping optimize this process, your projects can enjoy prolonged longevity and sustenance.',
          header: 'Our industry standards for rebar detailing services',
          subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
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
