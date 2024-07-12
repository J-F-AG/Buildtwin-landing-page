import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { forkJoin, retry } from 'rxjs';

@Component({
  selector: 'app-vender-details-aarbee',
  templateUrl: './vender-details-aarbee.component.html',
  styleUrls: ['../vender-detail-common-style.component.scss', './vender-details-aarbee.component.scss']
})
export class VenderDetailsAarbeeComponent {

  ourEngineers = [
    {
      img: "assets/images/aarbee/profile1.jpg",
      name: "Rajeevan Chingan",
      title: "Co-Founder / CEO",
      des: "A revolutionary in the field of structural steel design, detailing and checking. He has developed a user-friendly detail sheets, adopting innovative dimensioning style and detailing methods. He has over 32 years of experience in the field and is completely at home with AISC, BS & IS codes of practice.",
      expertise: ["Project management", "Site management", "Global projects"]
    },
    {
      img: "assets/images/aarbee/profile2.jpg",
      name: "Biju P Varghese",
      title: "Co-Founder / COO",
      des: "With over 30 years of experience in structural steel design, detailing and checking & well versed with AISC, BS & IS codes of practice. He has a comprehensive understanding of all aspects of design and detailing.",
      expertise: ["Concept development", "Renewable energies", "Lightning protection"]
    },
    {
      img: "assets/images/aarbee/profile3.jpg",
      name: "Prakasan T",
      title: "General Manager - Engineering",
      des: "A proficient design engineer having 37 years of rich experience in Structural Steel, RCC and Tensile membrane structures. He is profound in identifying and resolving the complexities associated with various types of structures and connections.",
      expertise: ["Structural Design", "Prestressed Elements", "Detailing as per EC"]
    },
    {
      img: "assets/images/aarbee/profile4.jpg",
      name: "Jinsmon Emmanuel",
      title: "General Manager - Delivery",
      des: "Has more than 22 years of experience in the field of detailing and complete control on projects, delivery schedule, manpower allocation etc. He is exceptionally well verse in handling multiple projects in various types with stringent schedules.",
      expertise: ["Structural Design", "Prestressed Elements", "Detailing as per EC"]
    },
    {
      img: "assets/images/aarbee/profile5.jpg",
      name: "Gopinathan Pillai N",
      title: "General Manager - QA/QC",
      des: "Has more than 40 years of experience in the field of drafting - detailing Structural Steel, RCC, & Cladding etc. He is well experienced in various types of projects like Airports, Desalination plants, Power Stations etc.",
      expertise: ["Structural Design", "Prestressed Elements", "Detailing as per EC"]
    }
  ];

  projects = [
    {
      type: 'Commercial',
      name: 'Las Vegas Raiders Stadium',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Las-Vegas-Raiders-Stadium_Merrill.jpg',
      description: '27,500 Tons',
    },
    {
      type: 'Commercial',
      name: 'Port Everglades Terminal 25',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Port-Everglades-Terminal.jpg',
      description: '1,040 Tons',
    },
    {
      type: 'Commercial',
      name: 'Jacksonville Transportation',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Jacksonville-Transportation-Authority-Admin-Building.jpg',
      description: '525 Tons',
    },
    {
      type: 'Commercial',
      name: 'The Cosmos',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/The-Cosmos.jpg',
      description: '1,000 Tons',
    },
    {
      type: 'Commercial',
      name: 'Thysee Printing',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Thysee-Printing.jpg',
      description: '100 Tons',
    },
    {
      type: 'Commercial',
      name: 'Milwaukee Arena',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Milwaukee-Arena.jpg',
      description: '7,300 Tons',
    },
    {
      type: 'Commercial',
      name: 'Intel SRR3',
      country: 'assets/images/ui/country3.png',
      location: 'India',
      image: 'assets/images/aarbee/Intel-SRR3.jpg',
      description: '4,300 Tons',
    },
    {
      type: 'Commercial',
      name: 'Newfoundland',
      country: 'assets/images/ui/code4.png',
      location: 'UK',
      image: 'assets/images/aarbee/Newfoundland-Project.jpg',
      description: '10,000 Tons',
    },
    {
      type: 'Commercial',
      name: 'Madison Nakoosa Trail',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Madison-Nakoosa-Trail-Shops_Real.jpg',
      description: '360 Tons',
    },
    {
      type: 'Commercial',
      name: 'Merrill Hotel & Conference',
      location: 'USA',
      country: 'assets/images/ui/code1.png',
      image: 'assets/images/aarbee/Merrill-Hotel-Conference-Center_Real.jpg',
      description: '420 Tons',
    },
    {
      type: 'Commercial',
      name: 'Waunakee Inter. School',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Waunakee-Intermediate-School_Real.jpg',
      description: '340 Tons',
    },
    {
      type: 'Commercial',
      name: 'Hooper Office',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Hooper-Office_Real.jpg',
      description: '385 Tons',
    },
    {
      type: 'Duct',
      name: 'Jim Bridger SCR Plate',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Jim-Bridger-SCR-Plate-Flues-Ducts__Real.jpg',
      description: '3,800 Tons',
    },
    {
      type: 'Commercial',
      name: 'Kentucky Convention Center',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Kentucky-International-Convention-Center_Real.jpg',
      description: '5,000 Tons',
    },
    {
      type: 'Arena',
      name: 'Kohl Center',
      country: 'assets/images/ui/code1.png',
      location: 'USA',
      image: 'assets/images/aarbee/Kohl-Center_Real.jpg',
      description: '520 Tons',
    }
  ];
  companyName = '';

  formData = {
    about: [],
    onsite: '',
    companyDetails: {
      icon: '',
      company_description: '',
      engineering_project_name: [],
      rating: '',
      domain: '',
      phone_number: '',
      working_timezone: '',
      office_hours: ''
    },
    softwares: {
      name: '',
      value: ''
    },
    buildingCode: [],
    specialTool: {
      special_tools: '',
      Special_tools_description: ''
    },
    featuredProject: {
      featured_projects_description: '',
      projects: [],
    },
    latest: {
      latest_updated_name: '',
      latest_updated_image: '',
    },
    engineers: [],
    accreditation: [],
    services: [],
    serviceType: '',
    capabilityMatrix: [],
  } as any;
  isLoaded = false;
  selectedServices = [] as any;
  listOfBuildingCode = [] as any;
  listOfcodes = {
    number_of_projects: [] as any,
    years_of_experience: [] as any
  } as any;
  serviceTypes = [];

  filteredProjects = this.projects;
  serviceSkills = [] as any;
  domain = '';
  selectedTomeSlot = '';
  showPageLoader = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private http: HttpClient, private route: ActivatedRoute) {

    this.getBusinessListing();
    this.domain = this.route.snapshot.params['domain'];
  }
  showPopup = false;


  selectedOption: string = 'gmt'; // Default selected option
  timeText: string = '10:00 AM to 07:00 PM'; // Default time text


  isSticky: boolean = false;
  activeSection: string = 'about'; // Default active section


  reviewsSlides: OwlOptions = {
    items: 5,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    autoWidth: true,
    autoplay: false,
    autoplayHoverPause: false,

    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 2
      },
      515: {
        items: 1
      },
      768: {
        items: 4
      },
      990: {
        items: 5
      },
      1400: {
        items: 6
      }
    }
  }


  heroSlides: OwlOptions = {
    items: 1,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    autoWidth: true,
    autoplay: false,
    autoplayHoverPause: false,

    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ],

  }


  aboutSlider: OwlOptions = {
    items: 1,
    nav: true,
    margin: 0,
    dots: true,
    loop: true,
    autoplay: false,
    autoWidth: true,
    autoplayHoverPause: false,
    navText: [
      "<i class='ti ti-chevron-left'></i>",
      "<i class='ti ti-chevron-right'></i>",
    ]

  }



  @HostListener('window:scroll', [])

  onWindowScroll() {

    var sections = document.querySelectorAll('.scrollSection');

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = scrollPosition >= 100;

    if (scrollPosition >= 200) {
      document.body.classList.add('removeDefaultHeader');
    } else {
      // document.body.classList.remove('scrolled');
    }

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
        console.log(98888)
        this.activeSection = section['id'];
      }
    });

    let percentScrolled = this.getScrollPercentage();
    var progressBar = document.getElementById('progress-bar');
    if (progressBar !== null) {
      progressBar.style.width = percentScrolled + '%';
    }

    // var sections2: HTMLElement[] = Array.from(document.querySelectorAll('div[id^="section"]')); // Select all sections with IDs starting with "section"
    // var otherSections: HTMLElement[] = Array.from(document.querySelectorAll('div[id^="other-section"]')); // Select all other sections


    // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // this.isSticky = scrollPosition >= 100;

    // if (scrollPosition >= 200) {
    //   document.body.classList.add('removeDefaultHeader');
    // } else {
    //   // document.body.classList.remove('scrolled');
    // }

    // // Determine active section
    // const sections = document.querySelectorAll('.scrollSection');
    // sections.forEach(section => {
    //   const sectionTop = section.getBoundingClientRect().top;
    //   const sectionId = section.getAttribute('id');
    //   if (sectionTop <= 200 && sectionTop >= -100 && sectionId) { // Check if sectionId is not null
    //     this.activeSection = sectionId;
    //   }
    // });


    // // progress bar
    // var windowHeight = window.innerHeight;
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   var docHeight = document.documentElement.scrollHeight;

    //   var totalSectionHeight = 0;
    //   var currentSectionIndex = -1;

    //   // Find the currently visible section
    //   for (var i = 0; i < sections2.length; i++) {
    //     var section = sections2[i];
    //     var rect = section.getBoundingClientRect();
    //     var sectionTop = rect.top + scrollTop;
    //     var sectionBottom = sectionTop + rect.height;

    //     if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
    //       currentSectionIndex = i;
    //       break;
    //     }
    //     totalSectionHeight += rect.height;
    //   }

    //   // Adjust totalSectionHeight for other sections in between
    //   for (var j = 0; j < otherSections.length; j++) {
    //     var otherSection = otherSections[j];
    //     var rect = otherSection.getBoundingClientRect();
    //     if (scrollTop >= rect.top + scrollTop) {
    //       totalSectionHeight += rect.height;
    //     }
    //   }

    //   var percentScrolled;

    //   // If the scrollTop is in the last other section or beyond
    //   if (scrollTop >= otherSections[otherSections.length - 1].getBoundingClientRect().top + scrollTop) {
    //     percentScrolled = 100;
    //   } else if (currentSectionIndex !== -1) {
    //     var currentSectionTop = sections2[currentSectionIndex].getBoundingClientRect().top + scrollTop;
    //     var rect = sections2[currentSectionIndex].getBoundingClientRect();
    //     var scrolledInSection = scrollTop - currentSectionTop;
    //     percentScrolled = (totalSectionHeight + scrolledInSection) / docHeight * 100;
    //   } else {
    //     percentScrolled = 0;
    //   }

    //   console.log(percentScrolled);
    //  var progressBar = document.getElementById('progress-bar');
    //   if (progressBar !== null) {
    //     progressBar.style.width = percentScrolled + '%';
    //   }

  }

  getScrollPercentage(): number {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      const scrollOffset = section.getBoundingClientRect().top - 200; // Adjusted offset
      window.scrollBy({ top: scrollOffset, behavior: 'smooth' });
    }
  }

  ngOnInit() {
    this.loadScript();
  }
  loadScript() {
    // Create script element
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

    // Append script element to the body
    this.renderer.appendChild(this.elRef.nativeElement, script);
  }
  call() {
    this.showPopup = true
  }
  closePopup() {
    this.showPopup = false

  }
  onSelectChange() {
    switch (this.selectedOption) {
      case 'gmt':
        this.timeText = '10:00 AM to 07:00 PM';
        break;
      case 'est':
        this.timeText = '09:00 AM to 06:00 PM';
        break;
      case 'pst':
        this.timeText = '07:00 AM to 04:00 PM';
        break;
      default:
        this.timeText = '10:00 AM to 07:00 PM'; // Default value
        break;
    }
  }
  filterProjectsByType(selectedType: string) {
    return this.projects.filter(project => project.type === selectedType);
  }
  onTypeChange(event: any): void {
    const selectedType = event.target.value;
    if (selectedType === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.filterProjectsByType(selectedType);
    }
  }

  getBusinessListing() {
    let domain = localStorage.getItem('domain');
    this.showPageLoader = true;
    forkJoin([
      this.http.get('https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListingPage/fields'),
      this.http.get(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListingPage/fields?mode=company_data`)
    ])
    .pipe(
      retry(2)
    )
    .subscribe( async (res: any[]) => {
      this.showPageLoader = false;
      // this.fieldData = res[0]['data'];
      // this.formData = res[1]['data'];
      res[1]['data'] = {
        "company_data": {
            "basic_form_fields": {
                "id": 323,
                "domain": "www.test.com",
                "created_at": "2024-07-11T13:26:01.000Z",
                "updated_at": "2024-07-11T13:26:01.000Z",
                "draft_data": null,
                "employees_count": "12",
                "market": "78",
                "years_in_business": "789",
                "reference_projects": "P1",
                "headquarter": "Delhio",
                "founding_year": "123",
                "office_location": "[\"Australia\",\"Vietnam\"]",
                "icon": "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240711/file_78cac99a-4a64-4acd-a9b6-e38570f8a8f4.png",
                "company_description": "test",
                "rating": "2",
                "phone_number": "78978979",
                "office_hours": "7-9",
                "autodesk": null,
                "allplan": null,
                "autodeskcivil": null,
                "bently": null,
                "accreditation": [
                    {
                        "logo": "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240711/file_f9511198-9905-4f47-810c-091605f5eb1b.png",
                        "name": "test 2"
                    }
                ],
                "company_name": "Test1",
                "softwares": [
                    {
                        "logo": "Autodesk",
                        "name": "12"
                    }
                ],
                "special_tools": "special tool",
                "latest_updated_description": null,
                "latest_updated_name": "test updted",
                "icon_attachments": [
                    "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240711/file_78cac99a-4a64-4acd-a9b6-e38570f8a8f4.png"
                ],
                "special_tools_description": null,
                "featured_projects_description": null,
                "working_timezone": "gmt",
                "company_id": "83521233-ba32-4028-a0d8-2bc62bc11ae8",
                "engineering_project_name": [
                    {
                        "name": "test 2"
                    },
                    {
                        "name": "test3"
                    },
                    {
                        "name": "test 5"
                    },
                    {
                        "logo": "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240712/file_55fb4602-856d-4558-9f56-1f9e48c00bed.png",
                        "name": "test7"
                    }
                ],
                "latest_updated_image": "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240711/file_1626bfd8-dd72-4549-ac01-296c77fe9b0c.png"
            },
            "building_codes": [
                {
                    "id": 4,
                    "entity_type": "building_codes",
                    "is_selected": true,
                    "name": "IBC",
                    "number_of_projects": "1",
                    "years_of_experience": "34"
                }
            ],
            "service_information": [
                {
                    "id": 7,
                    "parent_id": null,
                    "name": "BoQ/QS Services",
                    "is_selected": true,
                    "service_type": "Structural",
                    "sub_services": [],
                    "capability_matrix": [
                        {
                            "functional_area_id": 1,
                            "skill_level": "Best"
                        }
                    ]
                },
                {
                    "id": 9,
                    "parent_id": null,
                    "name": "Detailed Engineering",
                    "is_selected": true,
                    "service_type": "Structural",
                    "sub_services": [],
                    "capability_matrix": [
                        {
                            "functional_area_id": 1,
                            "skill_level": "Best"
                        },
                        {
                            "functional_area_id": 2,
                            "skill_level": "Best"
                        },
                        {
                            "functional_area_id": 3,
                            "skill_level": "Best"
                        },
                        {
                            "functional_area_id": 4,
                            "skill_level": "Best"
                        },
                        {
                            "functional_area_id": 5,
                            "skill_level": "Best"
                        },
                        {
                            "functional_area_id": 6,
                            "skill_level": "Best"
                        }
                    ]
                }
            ],
            "featured_projects": [
                {
                    "id": 464,
                    "domain": "www.test.com",
                    "project_name": "Test",
                    "project_description": "d1",
                    "project_logo": "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240711/file_29ce1b9a-1a7d-4a24-8acf-14679fbc72d6.png",
                    "project_title": "t1",
                    "project_region": "p1",
                    "project_category": "",
                    "created_at": "2024-07-11T13:35:23.942Z",
                    "updated_at": "2024-07-11T13:35:23.942Z",
                    "is_selected": true,
                    "volume": "",
                    "service": "Structural"
                },
                {
                    "id": 467,
                    "domain": "www.test.com",
                    "project_name": "p1",
                    "project_description": "d1",
                    "project_logo": "",
                    "project_title": "t1",
                    "project_region": "l1",
                    "project_category": "",
                    "created_at": "2024-07-11T13:50:54.406Z",
                    "updated_at": "2024-07-11T13:50:54.406Z",
                    "is_selected": true,
                    "volume": "",
                    "service": "Structural"
                }
            ],
            "our_engineers": [
                {
                    "id": 446,
                    "domain": "www.test.com",
                    "engineer_name": "Test1",
                    "engineer_designation": "des1",
                    "engineer_note": "description1",
                    "engineer_profile_picture": "https://s3.eu-central-1.amazonaws.com/buildtwin-prod-devcockpit.buildtwin.com/bt-assets/resource/privateS3/upload/business-listing-image/public/20240711/file_58418148-ba38-4eb8-ae80-4e6f1bd5e1e2.png",
                    "engineer_expertise": "Exp1",
                    "is_selected": true,
                    "created_at": "2024-07-11T13:31:25.766Z",
                    "updated_at": "2024-07-11T13:31:25.766Z"
                }
            ]
        }
    }
      let formData = res[1]['data']['company_data'];
      let fieldData = formData['basic_form_fields'];
      this.selectedOption = formData['basic_form_fields']['working_timezone'];
      this.selectedTomeSlot = formData['basic_form_fields']['office_hours'];
      const bKey = 'basic_form_fields';
      res[0]['data'][bKey].forEach((form: any) => {
        if (form.field_group_name === 'About') {
          form.fields.forEach((f: any) => {
            this.formData.about.push({
              key: f.field_name,
              value: formData[bKey][f.field_key],
              isPlus: f.field_name === 'Years in Business' || f.field_name === 'Reference Projects'
            })
          })
        }
        if (form.field_group_name === 'Accreditation') {
          this.formData.accreditation = formData[bKey]['accreditation']
        }
        if (form.field_group_name === 'On-Site Available(own office)') {
          // form.fields = JSON.parse(form.fields);
          form.fields.forEach((f: any) => {
            this.formData.onsite = JSON.parse(formData[bKey][f.field_key]);
          });
        }
        if (form.field_group_name === 'Bio') {
          form.fields.forEach((f: any) => {
            this.formData.companyDetails[f.field_key] = formData[bKey][f.field_key];
          })
        }
        if (form.field_group_name === 'softwares' && formData[bKey]['softwares'] && formData[bKey]['softwares'].length) {
          const sdata = formData[bKey]['softwares'][0];
          this.formData.softwares.name = sdata.name;
          this.formData.softwares.value = sdata.logo;
        }
        if (form.field_group_name === 'Latest Updated') {
          form.fields.forEach((f: any) => {
            this.formData.latest[f.field_key] = formData[bKey][f.field_key];
          })
        }
        if (form.field_group_name === 'Special Tools & Methods') {
          form.fields.forEach((f: any) => {
            this.formData.specialTool[f.field_key] = formData[bKey][f.field_key];
          })
        }
        if (form.field_group_name === 'featured_projects') {
          form.fields.forEach((f: any) => {
            this.formData.featuredProject[f.field_key] = formData[bKey][f.field_key];
          });
          this.formData.featuredProject.projects = formData['featured_projects'];
        }

      })
      this.formData.buildingCode = res[0]['data']['building_codes'];
      this.formData.engineers = formData['our_engineers'];
      this.companyName = formData['basic_form_fields']['company_name'];
      this.formData.services = res[0]['data']['services']
      this.isLoaded = true;
      this.serviceSkills = [
        { id: 0, name: '' },
        ...res[0]['data']['service_func_area'],
      ];
      formData['service_information'].forEach((s: any) => {
        // this.preSelectservices.push(s.name);
        let exist = this.serviceTypes.findIndex(a => a === s.service_type);
        if (exist === -1) {
          this.serviceTypes.push(s.service_type);
        }
        if (s.capability_matrix.length) {
          let obj = {} as any
          obj['functional_areas'] = JSON.parse(JSON.stringify(this.serviceSkills.filter((a: any) => a.id !== 0)));
          obj['functional_areas'].forEach((val: any) => {
            let d = s.capability_matrix.filter((ab: any) => ab.functional_area_id === val.id);
            if (d.length) {
              val.isChecked = true;
            } else {
              val.isChecked = false;
            }
          });
          this.selectedServices.push({
            ...s,
            ...obj,
            service_name: s.name
          })
        }
      });
      let obj = {
        code: '',
        number_of_projects: [] as any,
        years_of_experience: [] as any,
      }
      if (this.serviceTypes.length) {
        this.formData.serviceType = this.serviceTypes.join(',');
      }
      console.log(this.formData)
      formData['building_codes'].forEach((b: any) => {
        obj = {
          code: b.name,
          number_of_projects: [] as any,
          years_of_experience: [] as any,
        }
        formData['building_codes'].forEach((ab: any) => {
          let arrnum = [] as any;
          let arrp = [] as any;
          arrnum.push({
            number_of_projects: ab.number_of_projects || 0,
          });
          arrp.push({
            years_of_experience: ab.years_of_experience || 0,
          });
          // this.listOfcodes = {
          //   number_of_projects: [ ...this.listOfcodes.number_of_projects, ...arrnum],
          //   years_of_experience: [ ...this.listOfcodes.years_of_experience, ...arrp],
          // } as any;

          obj.number_of_projects.push({
            number_of_projects: ab.number_of_projects || 0,
          })
          obj.years_of_experience.push({
            years_of_experience: ab.years_of_experience || 0
          })
        })
        this.listOfcodes.number_of_projects.push(b.number_of_projects);
        this.listOfcodes.years_of_experience.push(b.years_of_experience);
        this.listOfBuildingCode.push(obj)
      })
    })
  }

}
