import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-hd-why-buildtwin',
  templateUrl: './hd-why-buildtwin.component.html',
  styleUrl: './hd-why-buildtwin.component.scss'
})
export class HdWhyBuildtwinComponent implements OnInit {

  constructor(public _languageService:LanguageService) { }

  ngOnInit(): void {
  }
  @Input() isBrowseService: boolean = false;

  whyBuildTwinArray = [
    {
      name: 'Quality',
      width: 19,
      height: 18,
      icon: 'quality-icon',
      displayIcon: 'assets/images/qualityBuildtwin.png',
      content:
        'Our tools ensure superior quality and durability, enhancing efficiency and reducing maintenance costs. <br><br>Experience precise workmanship and long-lasting performance with every project.',
      details: [
        {
          header: 'Buildtwin Quality Management',
          content: 'The BuildTwin process assures a high visibility into the quality management process - considering dynamically all inputs ',
          items: [
            'Automated Quality Checklist - customised for the user',
            'Audit Trail and Quality Logs ',
            'Reporting system on quality issues '
          ],
        }
      ],
      footer: 'Learn more',
    },
    {
      name: 'On Time',
      width: 16.55,
      height: 16.55,
      icon: 'onTime-icon',
      displayIcon: 'assets/images/on time.png',
      content:
        'Timely delivery is our promise. We value your time and ensure that projects are completed within the agreed timeframe without compromising on quality.',
      details: [
        {
          header: 'Buildtwin - reliability in Schedules',
          content: 'The BuildTwin process creates reliable schedules - with dynamically adjusting based on progress, delays and many other factors.  ',
          items: [
            'Predictive submission dates ',
            'Visibility of unresolved RFIs, comments, etc. ',
            'System to steer submissions based on priorities'
          ],
        },
      ],
      footer: 'Learn more',
    },
    {
      name: 'Plug & Play',
      width: 14.71,
      height: 16.38,
      icon: 'plugAndPlay-icon',
      displayIcon: 'assets/images/plug and play.png',
      content:
        'Our solutions are designed for easy integration, allowing you to quickly implement and start using them with minimal setup time.',
      details: [
        {
          header: 'Plug & Play',
          content: 'No additional workflow required - just connect BuildTwin to your existing tools and get access to 100s of technical teams. ',
          items: [
            'Supports all major CDEs ',
            'Supports MS Sharepoint, MS Teams  ',
            'Reporting system on quality issues '
          ],
        },
      ],
      footer: 'Learn more',
    },
    {
      name: 'Easy Payment',
      width: 17.47,
      height: 16.77,
      icon: 'payments-icon',
      displayIcon: 'assets/images/Easy payment.png',
      content:
        'Flexible payment options to suit your needs. We offer multiple payment methods and plans to make transactions smooth and hassle-free.',
      details: [
        { 
          header: 'Easy payment', 
          content: 'BuildTwin provides (optional) easy to use payment methods - including methods to withhold payment / keeping money in trust. ',
          items: [
            'Optional: third party trust available  ',
            'Audited tax residency (for pre-qualified vendors)',
            'Third-party escalation '
          ] 
        }
      ],
      footer: 'Learn more'
    },
    {
      name: 'Additional Services',
      width: 18.39,
      height: 18.39,
      icon: 'additionalServices-icon',
      displayIcon: 'assets/images/live video rec.png',
      content:
        'Enhance your experience with our additional services tailored to meet your specific needs and provide extra value.',
      details: [
        {
          header: 'Additional services',
          content: 'Customise your BuildTwin experience with tailored services as per your requirements. ',
          items: [
            'On-Site support ',
            'Custom Qualification programs available',
            'Premium Support available'
          ],
        },
      ],
      footer: 'Learn more',
    },
    {
      name: 'Support',
      width: 17.85,
      height: 18.39,
      icon: 'support-icon',
      displayIcon: 'assets/images/support.png',
      content:
        'We provide exceptional support to ensure your satisfaction. Our dedicated team is available to assist you with any queries or issues.',
      details: [
        {
          header: 'Support',
          content: 'BuildTwin Supports resolves issue when it matters - including support in finding solutions once schedules / quality requirements are not met. ',
          items: [
            'Support from BuildTwin in terms of escalation ',
            'Compliant auditing trail from case ',
            'Clear terms of service and legal framework '
          ],
        }
      ],
      footer: 'Learn more',
    },
  ];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  get activeContent() {
    return this.whyBuildTwinArray[this.activeTab];
  }

}
