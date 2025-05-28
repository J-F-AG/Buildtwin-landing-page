import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MarkdownService } from 'ngx-markdown';
import { marked } from 'marked';

@Component({
  selector: 'app-rebar-precast-service',
  // standalone: true,
  // imports: [],
  templateUrl: './precast-service.component.html',
  styleUrls: ['./precast-service.component.scss']
})
export class RebarPrecastServiceComponent implements OnInit,  OnChanges{
  @Input() isBrowseService: boolean = false;
  @Input() sectionHeading: any = '';
  @Input() sectionSubHeading: any = ''
  @Input() precastArray: any = []
  processedHeading: SafeHtml;
  processedSubHeading: SafeHtml;
  // processedPrecastArray: any = [];

  @Input() subServicesInfo: any = [];

  // precastArray: any = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sectionHeading'] && this.sectionHeading) {
      // console.log("Original heading:", this.sectionHeading);
      const textWithBreaks = this.sectionHeading.replace(/\n/g, '<br>');
      let html = textWithBreaks//marked(textWithBreaks);
      // console.log('html before removing p tag: ', html);
      // // Remove surrounding <p> tags
      // html = html.replace(/^<p>(.*)<\/p>$/s, '$1');
      // More robust way to remove surrounding <p> tags
    // if (html.startsWith('<p>') && html.endsWith('</p>')) {
    //   html = html.substring(3, html.length - 4);
    // }

    // Create temporary DOM element
    // const tempDiv = document.createElement('div');
    // tempDiv.innerHTML = html;
    
    // // Check if we have a p tag as first child
    // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
    //   // Properly cast to Element to access innerHTML
    //   const pElement = tempDiv.firstChild as Element;
    //   html = pElement.innerHTML;
    // }

      // console.log('html after removing p tag: ', html);
      this.processedHeading = this.sanitizer.bypassSecurityTrustHtml(html);
    }
    if (changes['sectionSubHeading'] && this.sectionSubHeading) {
      // console.log("Original heading:", this.sectionSubHeading);
      const textWithBreaks = this.sectionSubHeading.replace(/\n/g, '<br>');
      let html = textWithBreaks//marked(textWithBreaks);
      // console.log('html before removing p tag: ', html);
      // // Remove surrounding <p> tags
      // html = html.replace(/^<p>(.*)<\/p>$/s, '$1');
      // More robust way to remove surrounding <p> tags
    // if (html.startsWith('<p>') && html.endsWith('</p>')) {
    //   html = html.substring(3, html.length - 4);
    // }

    // Create temporary DOM element
    // const tempDiv = document.createElement('div');
    // tempDiv.innerHTML = html;
    
    // // Check if we have a p tag as first child
    // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
    //   // Properly cast to Element to access innerHTML
    //   const pElement = tempDiv.firstChild as Element;
    //   html = pElement.innerHTML;
    // }

      // console.log('html after removing p tag: ', html);
      this.processedSubHeading = this.sanitizer.bypassSecurityTrustHtml(html);
    }
    if(changes['precastArray'] && this.precastArray){
      for(let precastItem of this.precastArray) {  
        for(let item of precastItem.details){
          //for sub-service description
            // let textWithBreaks = item.mainContent.replace(/\n/g, '<br>');
              let html = marked(item.mainContent);

              // console.log('html after marked processing ', html);
        
            // // Create temporary DOM element
            // let tempDiv = document.createElement('div');
            // tempDiv.innerHTML = html;
          
            // // Check if we have a p tag as first child
            // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
            //   // Properly cast to Element to access innerHTML
            //   const pElement = tempDiv.firstChild as Element;
            //   html = pElement.innerHTML;
            // }
        
            // item.mainContent = this.sanitizer.bypassSecurityTrustHtml(html);
            item.mainContent = this.sanitizer.bypassSecurityTrustHtml(
              html
            );            

          //for industry-standard section heading
       let textWithBreaks = item.header.replace(/\n/g, '<br>');
        html = textWithBreaks//marked(textWithBreaks);

      // Create temporary DOM element
      // let tempDiv = document.createElement('div');
      // tempDiv.innerHTML = html;
    
      // Check if we have a p tag as first child
      // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      //   // Properly cast to Element to access innerHTML
      //   const pElement = tempDiv.firstChild as Element;
      //   html = pElement.innerHTML;
      // }

        item.header = this.sanitizer.bypassSecurityTrustHtml(html);


        //for industry standard sub-heading

            textWithBreaks = item.subContent.replace(/\n/g, '<br>');
        html = textWithBreaks//marked(textWithBreaks);

      // Create temporary DOM element
      // tempDiv = document.createElement('div');
      // tempDiv.innerHTML = html;
    
      // // Check if we have a p tag as first child
      // if (tempDiv.firstChild && tempDiv.firstChild.nodeName === 'P') {
      //   // Properly cast to Element to access innerHTML
      //   const pElement = tempDiv.firstChild as Element;
      //   html = pElement.innerHTML;
      // }

        item.subContent = this.sanitizer.bypassSecurityTrustHtml(html);

        }
      }
    }
  }

  // @Input() industryStandardSectionHeading: any = '';
  // @Input() industryStandardSectionSubHeading: any = '';


 

   // precastArray = [
  //   {
  //     name: 'Rebar shop drawings',
  //     details: [
  //       {
  //         mainContent: 'Our certified vendors provide you with rebar shop drawings that are not only detailed, but accurate enough to provide your team with the exact size, shape, quantity, and arrangement of rebars within concrete structures. These rebar drawings are extensive to the point of including bar sizes, lengths, bending details, hooks, and bar marks - making for the perfect solution in optimizing efficiency and safety for buildings, bridges, foundations, and similar projects.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: '3D modelling',
  //     details: [
  //       {
  //         mainContent: 'While our rebar shop drawings are more technical and actionable for on-site execution, our 3D modelling provide you with visual layouts for rebar placementwithin the structure. The 2D rebar detailing and 3D rebar detailing, designed by our top-rated professionals, give you flat and three-dimensional representations respectively, to help you visualize the arrangement of rebars. This way, we makesure any clashes can be better detected so that there is minimal room for potential errors during construction.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Bar bending schedules',
  //     details: [
  //       {
  //         mainContent: 'With the bar bending schedules provided by your chosen vendors, you get a complete breakdown of rebar specifications, including the size, shape, length, and exact bending angles. Using cutting-edge software like AutoCAD and Revit, our vendors generate accurate bar bending schedules to guarantee error-free concrete casting. And, our ready-to-access, seamless platform makes sure you are privy to every critical information about the bar bending schedules of your project, whenever you need.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Retaining walls',
  //     details: [
  //       {
  //         mainContent: 'One of the areas where our rebar detailing services play a crucial role is retaining walls. The end-to-end rebar detailing services accessible through our platform cover everything from ensuring the retaining wall’s durability, prevention of cracks, and compliance with engineering standards. This way, youcan rest assured that your retaining walls are enhanced with the kind of structural integrity that allows withstanding loads and adverse environmental conditions.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Footing details',
  //     details: [
  //       {
  //         mainContent: 'Our accurate rebar details ensure that the foundation of your building’s load is evenly distributed on the ground, eliminating structural uncertainties. With our platform’s collaborative nature, your team can get real-time access to quickly generate, upload, review, or revise rebar footing details. This allows for efficientcoordination between contractors and stakeholders while saving time and cost in construction.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Foundation details',
  //     details: [
  //       {
  //         mainContent: 'Through our comprehensive platform, you can easily share foundation drawings, generate rebar schedules, and collaborate in real-time with vendors, engineers, fabricators, and contractors. This efficient project management setup allows for the exchange of accurate information, reduces manual errors, and in turn speeds up the overall project timeline. Well-planned foundation details are crucial to streamlining the execution process of every construction project.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: 'As-built drawings',
  //     details: [
  //       {
  //         mainContent: 'Even if you wish to enhance a previously completed project, our platform is well-equipped to serve you. With as-built drawings, you can get our vendors to provide you with a detailed and accurate representation of the rebar detailing, which you can document for the future. By giving you ready access to any changes made during the construction process, the as-built drawings on our platform allow you to compare them with the original design plans. This is your perfect solution for documenting as-built drawings for future maintenance or renovation.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Concrete joint and slab',
  //     details: [
  //       {
  //         mainContent: 'Rebar detailing for concrete joint and slab is a lot more efficient with our one-stop platform. Components like concrete joint and slab being critical within rebar detailing services, our platform eliminates discrepancies between stakeholders by providing a clear picture of the design and execution of these elements. By helping optimize this process, your projects can enjoy prolonged longevity and sustenance.',
  //         header: 'Our industry standards for rebar detailing services',
  //         subContent: 'We make sure our rebar detailing services meet the industry requirements that ensure durability in rebar structures. For this, we adhere to global standard codes such as:',
  //         items: [
  //           'ASTM',
  //           'ACI',
  //           'CRSI',
  //           'NZS',
  //           'AS',
  //           'BS',
  //           'Eurocode (EN)',
  //           'CSA',
  //           'DIN',
  //           'IS',
  //           'JIS',
  //           'SNI',
  //           'SANS'
  //         ],
  //       }
  //     ]
  //   },
  // ];




  // precastArray = this.subServicesInfo;

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  get activeContent() {
    return this.precastArray[this.activeTab];
  }

}
