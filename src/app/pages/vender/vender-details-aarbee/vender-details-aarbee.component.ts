import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { catchError, forkJoin, retry } from 'rxjs';
import { ModalPopupService } from './modal/modal.service';
import { FooterService } from '../../includes/hd-footer/footer.service';

@Component({
  selector: 'app-vender-details-aarbee',
  templateUrl: './vender-details-aarbee.component.html',
  styleUrls: ['../vender-detail-common-style.component.scss', './vender-details-aarbee.component.scss']
})
export class VenderDetailsAarbeeComponent {
  toggleContentIndex:number= -1
  serviceSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
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
  companyHighlights: '';

  formData = {
    about: [],
    onsite: '',
    directors: [],
    highlightServices: [],
    operations: [],
    jointbids: false,
    companyDetails: {
      icon: '',
      company_description: '',
      engineering_project_name: [],
      rating: '',
      domain: '',
      phone_number: '',
      working_timezone: '',
      office_hours: '',
      headquarter: '',
      compliance_contact: '',
      commercial_contact: '',
      tax_id: '',
      license: '',
      third_party_mediation: '',
      liability_insurance: '',
      registration_number: '',
    },
    additional_highlights: [],
    badges: [],
    softwares: [],
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
    reviews: [],
    clientReviews: [],
    engineeringData: [],
    faq: [],
    engineers: [],
    accreditation: [],
    services: [],
    serviceType: '',
    capabilityMatrix: [],
    service_func_area: [],
    sectors: [],
    premium_partner: false,
  } as any;
  isLoaded = false;
  selectedServices = [] as any;
  listOfBuildingCode = [] as any;
  listOfcodes = {
    number_of_projects: [] as any,
    years_of_experience: [] as any
  } as any;
  serviceTypes = [];
  showAlservices = true;
  selectedProjectCategory = {
    imageUrls: [],
    project_name: '',
    project_region: ''
  };

  filteredProjects = this.projects;
  serviceSkills = [] as any;
  domain = '';
  selectedTomeSlot = '';
  showPageLoader = false;
  verifiedReview = {
    rating: 0,
    reviewerCount: 0,
    state: ''
  };
  premium_partner;
  isVisible = false;
  userSelectedSectors = [];
  html: HTMLElement | string = '<h1>TEST!</h1>';
  isParentModal = false;
  isChildModal = false;
  isVisiblechild = false;
  isVisibleImage = false;
  selectedProject = {
    project_name: '',
    project_logo: [],
    project_region: '',
    project_description: '',
    categorylist: [],
  };
  addons = [];
  cockpitDomain = '';
  isAddon = false;
  selectedAddon = '';
  listOfSoftware = [];
  highlightImges = [];
  imageLeftOutCount = 0;
  currentFaq: any = 'faq0'
  isIframe = false;
  selectedPrimaryImage = '';
  filterIndex = 0;
  filterSelectedProjectCategorIndex = 0;
  categorisedProjectImages = [];
  constructor(private elRef: ElementRef, private renderer: Renderer2, private http: HttpClient, private route: ActivatedRoute, private modalService: ModalPopupService, private _footerService: FooterService) {

    this.getBusinessListing();
    this.domain = this.route.snapshot.params['id'];
    this.isIframe = this.route.snapshot.queryParams['isIframe'] ? true : false;
    this.cockpitDomain = this.route.snapshot.queryParams['domain'] || '';
    if(this.route.snapshot.queryParams['isIframe']){
      document.body.classList.add('iframeEmbed');
    }
  }
  showPopup = false;
  openModal(html: HTMLElement | string = "", isParent: boolean, isChild: boolean, project) {
    this.isParentModal = isParent;
    this.isChildModal = isChild;
    if (project) {
      this.selectedProject = project
    }
    this.modalService.openModal(html, {isParent, isChild});
  }


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
    autoplayHoverPause: false,
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
  setPrimaryImage(img, imageIndx) {
    this.selectedPrimaryImage = img;
    // let image = this.selectedProject[this.filterIndex].imageurls.filter((a, i) => i === imageIndx);
  }

  showModal(type, project?, imageIndx?, parentName?): void {
    if (type === 'parent') {
      this.isVisible = true;
      if (!this.selectedProjectCategory.imageUrls.length) {
        this.selectedProjectCategor(0);
      }
    }
    if (type === 'child') {
      this.isVisiblechild = true;
    }
    if (type === 'image') {
      this.isVisibleImage = true;
      let image = [];
      if (parentName === 'parent') {
        image = this.selectedProjectCategory.imageUrls.filter((a, i) => i === imageIndx);
      } else {
        image = this.selectedProject.categorylist[this.filterIndex].imageurls.filter((a, i) => i === imageIndx);
      }
      this.selectedPrimaryImage = image[0];
    }
    if(project){
      this.filterIndex = 0;
      this.selectedProject = project;
      if (type === 'child') {
        this.selectCategory(0);
      }
    }
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  handleOkChild(): void {
    this.isVisiblechild = false;
  }

  handleCancelChild(): void {
    this.isVisiblechild = false;
  }
  handleOkImage(): void {
    this.isVisibleImage = false;
  }

  handleCancelImage(): void {
    this.isVisibleImage = false;
  }

  ngOnInit() {
    this.loadScript();
    setTimeout(() => {
      console.log(this.formData?.highlightServices)
    }, 10000);
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

  removeAddon(index, i) {
    this.serviceTypes[index].addon_titles[i].isSelected = false;
    // this.serviceTypes[index].addon_titles = this.serviceTypes[index].addon_titles.filter((a, inx) => inx !== i);
  }

  addAdons(index, i) {
    this.serviceTypes[index].addon_titles[i].isSelected = true;
    // let adon = this.addons.filter(a => a.id === Number(this.selectedAddon));
    // this.serviceTypes[index].addon_titles.push(adon[0].title);
    // this.isAddon = false;
    // this.selectedAddon = '';
  }

  selectCategory(idx) {
    this.filterIndex = idx;
    this.selectedProject.project_logo = this.selectedProject.categorylist[idx].imageurls;
  }

  selectedProjectCategor(idx) {
    this.filterSelectedProjectCategorIndex = idx;
    this.selectedProjectCategory = this.categorisedProjectImages[idx];
  }

  add() {
    this.isAddon = true;
  }

  getBusinessListing() {

    let url = `https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies`
    this.route.queryParams.subscribe(params => {
      const status = params['status'];
      // Check if both parameters are available
      if (status === 'unpublished') {
        url = `https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListing/companies?status=${'Unpublished'}`
      }
    });
    this.showPageLoader = true;
    this.http.get(url)
    .pipe(
      catchError(err => {
        this.showPageLoader = false;
        return err;
      }),
      retry(2)
    ).subscribe(companies => {
      if (companies && companies['data'] && companies['data']['details'] && companies['data']['details'].length) {
        let company = companies['data']['details'].filter(a => a.company_name.replace(/ /g,'') === this.domain);
        if (company.length || this.isIframe) {
          let queryParam = company.length ? company[0].domain: this.cockpitDomain;
          if (this.isIframe) {
            company = [{
              domain: this.domain
            }]
          }
          // https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production
          forkJoin([
            this.http.get('https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListingPage/fields'),
            this.http.get(`https://zcv2dkxqof.execute-api.ap-southeast-1.amazonaws.com/production/businessListingPage/fields?domain=${queryParam}`)
          ])
            .pipe(
              catchError(err => {
                this.showPageLoader = false;
                return err;
              }),
              retry(2)
            )
            .subscribe(async (res: any[]) => {
              // this.fieldData = res[0]['data'];
              // this.formData = res[1]['data'];
              let formData = res[1]['data']['company_data'];
              if (formData) {
                let fieldData = formData['basic_form_fields'];
                this.selectedOption = fieldData ? formData['basic_form_fields']['working_timezone']: '';
                this.selectedTomeSlot = fieldData ? formData['basic_form_fields']['office_hours'] : '';
                this.companyHighlights = fieldData ? formData['basic_form_fields']['company_highlights']: '';
                const bKey = 'basic_form_fields';
                res[0]['data'][bKey].forEach((form: any) => {
                  if (form.field_group_name === 'About') {
                    form.fields.forEach((f: any) => {
                      if (f.field_name === "Headquarter") {
                        this.formData.companyDetails.headquarter = formData[bKey] ? formData[bKey][f.field_key]: '';
                      }
                      this.formData.about.push({
                        key: f.field_name,
                        value: formData[bKey] ? formData[bKey][f.field_key]: '',
                        isPlus: f.field_name === 'Years in Business' || f.field_name === 'Reference Projects'
                      })
                    })
                  }
                  if (form.field_group_name === 'Accreditation') {
                    this.formData.accreditation = formData[bKey] ? formData[bKey]['accreditation']: this.formData.accreditation
                  }
                  if (form.field_group_name === 'On-Site Available(own office)') {
                    // form.fields = JSON.parse(form.fields);
                    form.fields.forEach((f: any) => {
                      this.formData.onsite = formData[bKey] ? JSON.parse(formData[bKey][f.field_key]): this.formData.onsite;
                    });
                  }
                  if (form.field_group_name === 'Bio' || form.field_group_name === 'About') {
                    form.fields.forEach((f: any) => {
                      if (f.field_key === 'rating') {
                        formData[bKey][f.field_key] = Number(formData[bKey][f.field_key]);
                      }
                      this.formData.companyDetails[f.field_key] = formData[bKey] ? formData[bKey][f.field_key]: this.formData.companyDetails[f.field_key];
                    })
                  }
                  if (form.field_group_name === 'softwares' && formData[bKey] && formData[bKey]['softwares'] && formData[bKey]['softwares'].length) {
                    this.formData.softwares = formData[bKey] ? formData[bKey]['softwares']: this.formData.softwares;
                  }
                  if (form.field_group_name === 'Latest Updated') {
                    form.fields.forEach((f: any) => {
                      this.formData.latest[f.field_key] = formData[bKey] ? formData[bKey][f.field_key]: this.formData.latest[f.field_key];
                    })
                  }
                  if (form.field_group_name === 'Special Tools & Methods') {
                    form.fields.forEach((f: any) => {
                      this.formData.specialTool[f.field_key] = formData[bKey] ? formData[bKey][f.field_key]: this.formData.specialTool[f.field_key];
                    })
                  }
                  if (form.field_group_name === 'featured_projects') {
                    form.fields.forEach((f: any) => {
                      this.formData.featuredProject[f.field_key] = formData[bKey][f.field_key];
                    });
                    let isImage = false;
                    if (formData['featured_projects']) {
                      formData['featured_projects'].forEach(a => {
                        if (!a.project_logo.includes("name")) {
                          a.project_logo = a.project_logo.replace('{', '[');
                          a.project_logo = a.project_logo.replace('}', ']');
                          a.project_logo = JSON.parse(a.project_logo);
                          a.categorylist = [];
                          let arrayy = [];
                          this.categorisedProjectImages = [];
                          
                          a.project_logo.forEach(p => {
                            arrayy.push({
                              imageUrl: p,
                              ...a
                            })
                            // if (!this.categorisedProjectImages.length) {
                              this.selectedProjectCategory.imageUrls.push(...arrayy)
                            // }
                          })
                        } else {
                          a.project_logo = a.project_logo.replace('{', '[');
                          a.project_logo = a.project_logo.replace(/.$/,"]");
                          a.project_logo = JSON.parse(a.project_logo);
                          let arr = [];
                          let cat = [];
                          isImage = true;
                          a.project_logo.forEach(p => {
                            p = JSON.parse(p);
                            cat.push(p);
                            arr.push(...p.imageurls);
                            if (!this.categorisedProjectImages.length) {
                              let arr = [];
                              p.imageurls.forEach(im => {
                                arr.push({
                                  imageUrl: im,
                                  ...a
                                 })
                              })
                              this.categorisedProjectImages.push({
                                 name: p.name,
                                 imageUrls: arr
                              })
                            } else {
                              let indx = this.categorisedProjectImages.findIndex(a => a.name === p.name);
                              if (indx === -1) {
                              let arr = [];
                                p.imageurls.forEach(im => {
                                  arr.push({
                                    imageUrl: im,
                                    ...a
                                   })
                                  })
                                  this.categorisedProjectImages.push({
                                     name: p.name,
                                     imageUrls: arr
                                  })
                              } else {
                                let arr = [];
                                p.imageurls.forEach(im => {
                                  arr.push({
                                    imageUrl: im,
                                    ...a
                                   })
                                  })
                                this.categorisedProjectImages[indx].imageUrls.push(
                                  ...arr
                                )
                              }
                            }
                          });
                          a.categorylist = cat;
                          a.project_logo = arr;
                          // a.project_logo = a.project_logo.map(a => a.logo);
                        }
                      });
                    }
                    if (this.categorisedProjectImages.length) {
                      this.categorisedProjectImages.forEach(a => {
                        a.imageUrls.forEach(b => {
                          let arr = [];
                          b.categorylist = [];
                          if (isImage) {
                            b.project_logo.forEach(c => {

                              b.categorylist.push(JSON.parse(c));
                              let bb = (JSON.parse(c)).imageurls.map(a1 => a1);
                              arr.push(...bb);
                            });
                          } else {
                            arr = b.project_logo
                          }
                          b.project_logo = arr;
                        })
                      })
                    }
                    this.highlightImges = formData['featured_projects'];
                    // for (let i = 0; i < 3; i++) {
                    //   formData['featured_projects'].forEach(item => {
                    //     this.highlightImges.push(item);
                    //   });
                    // }
                    this.formData.featuredProject.projects = formData['featured_projects'];
                  }
                });
                this.formData.buildingCode = res[0]['data']['building_codes'];
                this.formData.engineers = formData['our_engineers'];
                this.formData.clientReviews = formData['reviews'];
                this.listOfSoftware = res[0]['data']['softwares'];
                this.addons = res[0]['data']['addons'];
                const reviewArr = [];
                let revieCount = 0;
                let reviewRatCount = 0;
                if (this.formData.clientReviews && this.formData.clientReviews.length) {
                  this.formData.clientReviews.forEach(rev => {
                    revieCount += rev.ratings.length;
                    rev.reviesSum = rev.ratings.reduce((a, b) => a + b.score, 0);
                    reviewRatCount += rev.reviesSum;
                    reviewArr.push(...rev.ratings)
                  });
                }
                const groupReviewArr = [];
                reviewArr.forEach(r => {
                  let indx = groupReviewArr.findIndex(a => a.title_id === r.title_id);
                  if (indx === -1 || !groupReviewArr.length) {
                    r.count = 1;
                    groupReviewArr.push(r)
                  } else {
                    let ridx = groupReviewArr.findIndex(a => a.title_id === r.title_id);
                    groupReviewArr[ridx].count++;
                    groupReviewArr[ridx].score += r.score;
                  }
                });
                if (this.highlightImges && this.highlightImges.length > 7) {
                  this.imageLeftOutCount = this.highlightImges.length - 7;
                  this.highlightImges = this.highlightImges.slice(0, 7);
                }
                let ratingrew = 0;
                groupReviewArr.forEach(r => {
                  r.rating = Number((Number(r.score)/Number(r.count)).toFixed(1));
                  r.percentRating = r.rating * 10;
                  if (ratingrew === 0 || ratingrew < r.rating) {
                    ratingrew = r.rating;
                    this.verifiedReview.reviewerCount = r.count;
                  //   if (r.rating >= 8) {
                  //     this.verifiedReview.state = "Fabulous";
                  //   } else if (r.rating >= 6) {
                  //     this.verifiedReview.state = "Good";
                  //   } else if (r.rating < 6) {
                  //     this.verifiedReview.state = "Okay";
                  //   }
                  }
                  if (r.rating >= 8) {
                    r.color  = 'green'
                  } else if (r.rating >= 6) {
                    r.color = 'blue'
                  } else if (r.rating < 6) {
                    r.color = 'yellow'
                  }
                });
                if (groupReviewArr.length) {
                  this.verifiedReview.rating = Number((reviewRatCount/revieCount).toFixed(1));
                  // const reviw = groupReviewArr.filter(a => a.rating <= this.verifiedReview.rating);
                  // this.verifiedReview.reviewerCount = reviw.length;
                  if (this.verifiedReview.rating !== 0) {
                    if (this.verifiedReview.rating >= 8) {
                      this.verifiedReview.state = "Fabulous";
                    } else if (this.verifiedReview.rating >= 6) {
                      this.verifiedReview.state = "Good";
                    } else if (this.verifiedReview.rating < 6) {
                      this.verifiedReview.state = "Poor";
                    }
                  }
                }
                this.formData.reviews = groupReviewArr;
                // this.formData.clientReviews = 
                this.formData.badges = formData['badges'];
                this.companyName = fieldData? formData['basic_form_fields']['company_name']: '';
                this._footerService['companyDetail']['name'] = this.companyName;
                this.formData.companyDetails.rating = fieldData ? formData['basic_form_fields']['rating']: 0;
                this.formData.services = res[0]['data']['services']
                this.formData.directors = fieldData ? formData['basic_form_fields']['managing_director']: this.formData.directors;
                this.formData.premium_partner = fieldData ? formData['basic_form_fields']['premium_partner']: this.formData.premium_partner;
                this.formData.jointbids = fieldData ? formData['basic_form_fields']['joint_bids']: this.formData.jointbids;
                this.formData.service_func_area = res[0]['data']['service_func_area'];
                this.formData.engineeringData = fieldData ? formData['basic_form_fields']['engineering_project_name']: this.formData.engineeringData;
                this.formData.additional_highlights = fieldData ? formData['basic_form_fields']['additional_highlights']: this.formData.additional_highlights;
                if (fieldData && formData['basic_form_fields'] && formData['basic_form_fields']['operations']) {
                  this.formData.operations = formData['basic_form_fields']['operations'];
                }
                this.isLoaded = true;
                this.serviceSkills = [
                  { id: 0, name: '' },
                  ...res[0]['data']['service_func_area'],
                ];
                if (formData['basic_form_fields'] && formData['basic_form_fields']['company_description']) {
                  this.formData.companyDetails.company_description = formData['basic_form_fields']['company_description'].replace(/(?:\r\n|\r|\n)/g, '<br>');
                }
                if (formData['service_information'] && formData['service_information'].length) {
                  formData['service_information'].forEach((s: any) => {
                    // this.preSelectservices.push(s.name);
                    // let exist = this.serviceTypes.findIndex(a => a.service_type === s.service_type);
                    // if (exist === -1) {
                      this.serviceTypes.push(s);

                    // }
                    // isChecked
                   if (s.addon_titles) {
                    let arrAddon = [];
                    s.addon_titles.forEach(a => {
                      arrAddon.push({
                        name: a,
                        isSelected: false,
                      })
                    });
                    s.addon_titles = arrAddon;
                   }
                   if (s.service_segments) {
                     s.service_segments = JSON.parse(s.service_segments);
                   }
                   let exist = this.formData.highlightServices.findIndex(a => a.id === s.id);
                   if (s.service_featured && exist === -1) {
                     this.formData.highlightServices.push(s)
                   }
                    if (s.capability_matrix.length) {
                      let obj = {} as any;
                      s.capability_matrix.forEach(matrix => {
                        let mat = this.formData.sectors.findIndex(a => a.id === matrix.functional_area_id);
                        let alreadySector = this.userSelectedSectors.findIndex(a => a.id === matrix.functional_area_id);
                        if (alreadySector === -1) {
                          let name = this.serviceSkills.filter(a => a.id === matrix.functional_area_id);
                          if(name && name.length) {
                            this.userSelectedSectors.push({
                              name: name[0].name,
                              id: name[0].id,
                              sector_image: name[0].sector_image
                            })
                          }
                        }
                        if (mat === -1) {
                          let name = this.serviceSkills.filter(a => a.id === matrix.functional_area_id);
                          if (matrix.fucntion_area_featured) {
                            this.formData.sectors.push({
                              name: name[0].name,
                              id: name[0].id,
                              sector_image: name[0].sector_image
                            });
                          }
                        }
                      })
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
                }
                let obj = {
                  code: '',
                  number_of_projects: [] as any,
                  years_of_experience: [] as any,
                }
                if (this.serviceTypes.length) {
                  this.formData.serviceType = this.serviceTypes.join(',');
                }
                this.formData.faq = formData['basic_form_fields'] ? formData['basic_form_fields']['faq']: this.formData.faq;
                if (formData['building_codes'] && formData['building_codes'].length) {
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
                }
              }
              if (this.formData.highlightServices && this.formData.highlightServices.length > 7) {
                this.showAlservices = false;
              }
              this.showPageLoader = false;
            })
        } else {
          this.showPageLoader = false;
        }
      } else {
        this.showPageLoader = false;
      }
    })
  }
  tabbing2(index){
    if(this.currentFaq == index){
      this.currentFaq = ''
    }else {
      this.currentFaq = index
    }
  }
  toggleContent(i) {
    if(i === this.toggleContentIndex){
      this.toggleContentIndex = -1;
    }else {
      this.toggleContentIndex = i;
    }
  }
  ngOnDestroy() {
    this._footerService['companyDetail'] = {}
  }
}
