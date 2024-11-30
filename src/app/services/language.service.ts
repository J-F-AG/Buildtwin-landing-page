import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = [{ lang: "/en", "value": "", text: 'en' }, { lang: "/de", value: "/de", text: 'de' }]
  currentLanguage = '';
  serviceId: any = {
    "pre-cast-detailing-services": 9,
    "rebar-detailing-services" : 10,  //this has to be updated later
    "bim-services" : 11,  //this has to be updated later
    "steel-detailing-services" : 12,  //this has to be updated later
    "bim-service-provider-in-usa" : 13,  //this has to be updated later
    "steel-detailing-services-in-usa" : 14,  //this has to be updated later
  }
  serviceData: any = {
    "pre-cast-detailing-services": {
      name: 'Structural Detailing Pre-Cast'
    },
    "rebar-detailing-services" : {
      name: 'Rebar Detailing Services'
    },  //this has to be updated later
    "bim-services" : {
      name: 'BIM Services'
    },
    "steel-detailing-services" : {
      name: 'Structural Steel Detailing Services'
    },
    "bim-service-provider-in-usa" : {
      name: 'BIM Services'
    },
    "steel-detailing-services-in-usa" : {
      name: 'Structural Steel Detailing Services'
    }
  }
  isBrowser: boolean;
  setLanguageTagsObj: any[] = [];
  faqSchemaSubject = new Subject();
  constructor(
    private router: Router,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // if (this.isBrowser) {
    //   let localLang = '';
    //   const url = window.location.href; // Get the current URL
    //   if (this.isGermanURL(url)) {
    //     localLang = '/de';
    //   } else {
    //     if (window['Localize']) {
    //       window['Localize'].setLanguage('en');
    //     }
    //     console.log("This URL is not in German.");
    //   }
    //   this.currentLanguage = localLang;
    // }
  }

  isGermanURL(url: string): boolean {
    if (!this.isBrowser) {
      return false; // Always return false on the server as URL parsing is browser-specific
    }

    // Create a URL object to easily parse the input URL
    const parsedURL = new URL(url);

    // Get the pathname of the URL (e.g., "/de/about")
    const pathname = parsedURL.pathname;

    // Check if the pathname starts with "/de"
    return pathname.startsWith('/de');
  }

  checkAndSwitchVersion(currentUrl: string, lang: string): void {
    if (!this.isBrowser) {
      return; // Prevent any execution on the server
    }

    const url = new URL(currentUrl);

    if (lang === 'en') {
      // If the URL starts with '/de', switch to the version without '/de'
      // const newPath = url.pathname.replace(/^\/de/, ''); // Remove only the leading '/de'
      // const newUrl = `${url.origin}${newPath}${url.search}${url.hash}`;
      // window.location.href = newUrl;
      window['Localize'].setLanguage('en');
    } else {
      // If the URL does not start with '/de', add '/de' at the beginning of the path
      // const newPath = `/de${url.pathname}`;
      // const newUrl = `${url.origin}${newPath}${url.search}${url.hash}`;
      // window.location.href = newUrl;
      window['Localize'].setLanguage('de');
    }
  }
  // getLanguage(url) {  
  //   debugger

  //   let languageFound = undefined;
  //   this.language.forEach((ele) => {
  //     console.log(url.includes(ele.lang), ele);
  //     if (url.includes(ele.lang)) {
  //       languageFound = ele
  //     }

  //   })

  //   if (languageFound && languageFound.value) {
  //     try {
  //       // window['Localize'].setLanguage(languageFound.value);
  //     } catch (E) {
  //       console.log(E)
  //     }

  //     // this.currentLanguage = languageFound.value;
  //   }
  //   console.log(url, languageFound, "language")

  // }

  setCanonicalURL(url: string) {
    const existingCanonical = this.metaService.getTag("link[rel='canonical']");
  
    // If the canonical tag exists, remove it
    if (existingCanonical) {
      this.metaService.removeTag("link[rel='canonical']");
    }
    if(url.includes('partners')){
      url = url.toLowerCase();
    }
  
    // Add the new canonical tag
    this.metaService.addTag({ rel: 'canonical', href: url }, true); // <-- Second parameter is critical for SSR/SSG
  }
  

  setLanguageTags(url: string): void {
    try {
      const fullUrl = 'https://www.buildtwin.com' + url;

      // Define language tags
      const languageTags = [
        { href: `${fullUrl}`, hreflang: 'en' },
        // { href: `${fullUrl}`, hreflang: 'de' }
      ];


      // Add new alternate links for each language
      this.setLanguageTagsObj = languageTags.map(tag => ({
        hreflang: tag.hreflang,
        href: tag.href,
        rel: 'alternate'
      }));
    } catch (error) {
      
    }
  }

  injectFaqSchema(renderer) {


    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is BuildTwin and what do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin is a Software Company, which offers 3 products – a SaaS product to manage engineering teams and projects, a marketplace software to tender & bid for projects and a software solution for training and marketing custom trainings."
          }
        },
        {
          "@type": "Question",
          "name": "Does software mean I need to download something?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin works completely in the cloud and can be accessed through your browser."
          }
        },
        {
          "@type": "Question",
          "name": "For whom is BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin offers solutions for engineers, engineering teams, and clients with engineering projects such as contractors, JVs, pre-cast yards, etc."
          }
        },
        {
          "@type": "Question",
          "name": "Does BuildTwin replace CDEs or our existing ERP solution",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin works out of the box with all major CDEs. It is not required to change your existing software infrastructure – BuildTwin blends with existing workflows while yielding significant efficiency gains."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to change my workflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a solution provider, yes. You need to work with the AI Design Manager to deliver your work. But don’t worry – it is an easy process."
          }
        },
        {
          "@type": "Question",
          "name": "Do clients need to work with BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Clients can continue to work with you as is – through E-Mails, CDEs, or any other means. However, if you want to add value to your client's relationship, you can opt-in to ClientView and give Clients a LIVE view and options to steer projects."
          }
        },
        {
          "@type": "Question",
          "name": "How much does BuildTwin cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin has 3 packages for its SaaS offering, tailored for small teams, technical teams, and Enterprise. For more custom packages, please reach out to our Sales team."
          }
        }
      ]
    };
    return JSON.stringify(faqSchema);
    // Create the JSON-LD script tag
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);
    // // Append the script tag to the document head
    // renderer.appendChild(document.head, jsonLdScriptTag);
  }

  injectForMarketplaceSchema(renderer) {
    // Create the Marketplace schema for the marketplace page
    const MarketplaceSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does pre-qualified mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin marketplace offers different filters to select as per your pre-qualification standard. Together with our third-party auditor we vet all documents and verify that the submitted documents are legit.\n\nAs a client, you have the option to filter for solution providers based on their formal, technical, commercial, liability, and professional eligibility.\n\nFor Enterprise clients BuildTwin offers tailored tendering services to clear specific pre-qualification requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the contractual partner for a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin acts as a digital broker between the parties. The commercial contract is solely between the service and client. Clients can opt to use the BuildTwin standard contract or upload their own contract to be signed by service providers."
          }
        },
        {
          "@type": "Question",
          "name": "How does the commercial agreement work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After the digital tendering process, clients have the option to negotiate, discuss, and award the solution provider for the project. BuildTwin provides purchase order export for most commercial systems on the market."
          }
        },
        {
          "@type": "Question",
          "name": "What happens in case of a dispute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin carefully vets solution providers and offers an extensive rating system to learn more about them and their past performance. In cases of disputes, signed contractual terms are to be followed. However, BuildTwin offers a range of services to enable successful project delivery."
          }
        }
      ]
    };

    // Create the JSON-LD script tag
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(MarketplaceSchema);
    // // Append the script tag to the document head
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(MarketplaceSchema);
  }

  injectForAIProjectManagementSchema(renderer) {
    // Create the AIProjectManagement schema for the AI Project Management page
    const AIProjectManagementSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is BuildTwin and what do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin is a Software Company, which offers 3 products – a SaaS product to manage engineering teams and projects, a marketplace software to tender & bid for projects, and a software solution for training and marketing custom trainings."
          }
        },
        {
          "@type": "Question",
          "name": "Does software mean I need to download something?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin works completely in the cloud and can be accessed through your browser."
          }
        },
        {
          "@type": "Question",
          "name": "For whom is BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin offers solutions for engineers, engineering teams, and clients with engineering projects such as contractors, JVs, pre-cast yards, etc."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to change my workflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a solution provider, yes. You need to work with the AI Design Manager to deliver your work. But don’t worry – it is an easy process. As a client, no. Clients can continue with work as is – through any channels such as E-Mails, CDE, etc."
          }
        }
      ]
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(AIProjectManagementSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(AIProjectManagementSchema);
  }
  injectFAQSchemaForFaqPage(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is BuildTwin and what do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin is a Software Company, which offers 3 products – a SaaS product to manage engineering teams and projects, a marketplace software to tender & bid for projects, and a software solution for training and marketing custom trainings."
          }
        },
        {
          "@type": "Question",
          "name": "Does software mean I need to download something?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin works completely in the cloud and can be accessed through your browser."
          }
        },
        {
          "@type": "Question",
          "name": "For whom is BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin offers solutions for engineers, engineering teams, and clients with engineering projects such as contractors, JVs, pre-cast yards, etc."
          }
        },
        {
          "@type": "Question",
          "name": "Does BuildTwin replace CDEs or our existing ERP solution?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin works out of the box with all major CDEs. It is not required to change your existing software infrastructure – BuildTwin blends with existing workflows while yielding significant efficiency gains."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to change my workflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a solution provider, yes. You need to work with the AI Design Manager to deliver your work. But don’t worry – it is an easy process. Learn more."
          }
        },
        {
          "@type": "Question",
          "name": "Do clients need to work with BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Clients can continue to work with you as is – through E-Mails, CDEs, or any other means. However, if you want to add value to your client's relationship, you can opt-in to ClientView and give Clients a LIVE view and options to steer projects."
          }
        },
        {
          "@type": "Question",
          "name": "How much does BuildTwin cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin has 3 packages for its SaaS offering, tailored for small teams, technical teams, and Enterprise. For more custom packages, please reach out to our Sales team."
          }
        }
      ]
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  
  injectFAQSchemaForPreCastDetailingServices(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      "mainEntity": [{

        "@type": "Question",

        "name": "Why should I choose a vendor from BuildTwin?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "BuildTwin is a one-stop platform that gives you ready access to multiple global vendors from around the world for pre-cast detailing services. These vendors are pre-qualified and aggregated onto the platform to instantly invite the best bids, thereby completely eliminating the laborious task of searching for vendors everywhere. BuildTwin automates your entire project, by giving you remote access to every single update for close monitoring.Not only that, you can even plug in your own workflow portal with BuildTwin for seamless integration."

        }

      }, {

        "@type": "Question",

        "name": "What software do vendors on BuildTwin use for precast detailing?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "BuildTwin’s vendors stay up to date on the latest industry trends when it comes to their choice of software, AutoCAD and Revit."

        }

      }, {

        "@type": "Question",

        "name": "How does BuildTwin ensure the security and confidentiality of my project data?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Our AI-driven project management platform is meticulously designed with industry-leading privacy protocols to ensure that your data remains confidential, secure, and under your control. Our embedded trust system is integrated into every workflow, automating compliance tasks and reducing manual work, allowing you to focus on engineering while we ensure your operations remain compliant and secure."

        }

      }, {

        "@type": "Question",

        "name": "What is the process for BuildTwin pre-qualifying its vendors?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "BuildTwin aggregates the best-in-industry vendors by conducting a thorough background check and verification of a proven track record in pre-cast detailing services. The vendors are chosen based on experience, reliability, and a line of successful projects to their name."

        }

      }, {

        "@type": "Question",

        "name": "How can I compare vendors listed on BuildTwin?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "BuildTwin provides you with a list of the top vendors categorized based on their sectors, experience, delivered projects, and locations. You can easily compare them against these parameters by selecting your required filters."

        }

      }, {

        "@type": "Question",

        "name": "What type of projects can vendors on BuildTwin handle?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "The vendors listed on BuildTwin are experienced in handling pre-cast detailing services for airports, residential, commercial and industrial buildings, data centers, power plants, chemical plants, manufacturing plants, parking structures, schools, hospitals, warehouses, bridges, tunnels, water & waste, metros, roadways, retaining walls, and foundations, among others."

        }

      }, {

        "@type": "Question",

        "name": "How does BuildTwin ensure the quality of the services provided by vendors?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "By having a systematic step-by-step process in place and strict adherence to international compliance codes, BuildTwin makes sure you have direct access to every stage of the project. Right from erection drawings to cast-in components, quantity take-offs to assembling and production, and for every step in between, BuiltTwin ensures detailed reviews and stringent quality control in its pre-cast detailing services."

        }

      }, {

        "@type": "Question",

        "name": "How quickly can I expect a response from vendors on BuildTwin?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "As soon as you sign up on BuildTwin, you can access our ready list of vendors for pre-cast detailing services from around the globe. All you need to do is invite 5+ vendors to bid on your project, and they will reach out to you with their best offers in X hours/days."

        }

      }, {

        "@type": "Question",

        "name": "What support does BuildTwin offer during the project?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "BuildTwin automates your entire project, by doing most of your work behind the scenes for you. From vendor selection to quality control, digitalized documentation to live updates, BuildTwin gives you the freedom to manage your project from anywhere with the best resources and practices."

        }

      }]

    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }

  injectFAQSchemaForSteelDetailingServices(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
          "@type": "Question",
          "name": "What steel detailing services does BuildTwin offer through its platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin provides a comprehensive range of steel detailing services to support your construction and engineering projects. Our offerings include: Shop Drawings: Detailed fabrication drawings for steel components such as beams, columns, trusses, and connections. Erection Drawings: Precise plans for the assembly and installation of steel structures on-site. 3D Modeling: Advanced 3D models using software like Tekla Structures and AutoCAD for accurate visualization. Connection Design: Detailed design and detailing of bolted and welded connections, ensuring structural integrity. Material Lists: Bill of materials (BOM) including quantities, sizes, and specifications for procurement. Clash Detection: Identifying and resolving conflicts within the steel framework and with other building systems. Miscellaneous Steel Detailing: Services for stairs, handrails, ladders, platforms, and other custom steel elements. Our pre-qualified vendors are skilled professionals who deliver high-quality steel detailing services tailored to your project's specific requirements."
          }
      },{
          "@type": "Question",
          "name": "How does BuildTwin ensure the quality and accuracy of steel detailing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quality and accuracy are paramount in steel detailing to ensure structural safety and project success. BuildTwin ensures this by: Pre-Qualified Vendors: All vendors undergo a rigorous vetting process to verify their expertise and track record. International Standards Compliance: Vendors adhere to global standards like AISC, BS, Eurocode, and AWS for welding. AI-Powered Quality Management: Our AI Design Manager assists in checking drawings for errors and compliance issues. Certified Workflows: We implement standardized, certified workflows to maintain consistency and reliability. Live Project Tracking: Monitor your project's progress in real-time and collaborate directly with vendors. Regular Updates and Reviews: Vendors provide frequent updates, and you can review and provide feedback at each stage. By combining experienced vendors, advanced technology, and robust processes, we ensure high-quality deliverables for your steel detailing projects."
          }
      },{
          "@type": "Question",
          "name": "Can I choose from pre-qualified vendors for steel detailing services on BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BuildTwin offers access to a network of pre-qualified vendors specializing in steel detailing services. You can: Browse Vendor Profiles: View detailed profiles, past projects, client reviews, and areas of expertise. Compare Bids: Receive proposals from multiple vendors to find the best fit for your budget and project needs. Select Based on Expertise: Choose vendors with specific experience relevant to your project's requirements. Global Access: Connect with vendors worldwide, giving you access to a broader talent pool. Our platform simplifies the vendor selection process, ensuring you find the right partner for your project."
          }
      },{
          "@type": "Question",
          "name": "What international codes and standards are followed in the steel detailing services offered through BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our vendors adhere to various international codes and standards to ensure compliance and quality, including: American Institute of Steel Construction (AISC) Standards British Standards (BS) and BS EN Series Eurocode 3 for Steel Structures Australian Standards (AS/NZS) Canadian Standards Association (CSA) Codes American Welding Society (AWS) Specifications Other Regional Codes: Depending on your project's location and requirements. Compliance with these standards ensures that your steel structures are designed and detailed to meet safety and quality benchmarks."
          }
      },{
          "@type": "Question",
          "name": "How does BuildTwin's AI technology enhance steel detailing projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BuildTwin leverages AI technology to enhance various aspects of steel detailing projects: AI Design Manager: Assists with project management tasks, automating routine processes and maintaining compliance. Automated Quality Checks: AI algorithms review drawings for errors, ensuring high accuracy. Efficient Communication: Streamlines communication between clients and vendors, reducing delays. Data Management: Securely manages project data with easy access and version control. Predictive Insights: Provides insights into project timelines and potential bottlenecks for proactive management. By integrating AI, we help you achieve greater efficiency, accuracy, and productivity in your steel detailing projects."
          }
      }]
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForRebarDetailingServices(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What rebar detailing services does BuildTwin offer through its platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At BuildTwin, we provide a comprehensive range of rebar detailing services through our one-stop platform. Our services include: Detailed Rebar Drawings: Precise and accurate drawings for the placement and installation of reinforcing steel bars in concrete structures. Bar Bending Schedules: Detailed lists specifying the shape, dimensions, and quantity of each rebar required. Quantity Take-offs: Accurate calculations of the materials needed, helping in cost estimation and procurement. Fabrication Details: Instructions and specifications for the fabrication of rebar components. 3D Modelling and BIM Integration: Advanced modelling for clash detection and seamless integration with Building Information Modelling systems. Our pre-qualified vendors are equipped to handle projects of any scale, ensuring high-quality deliverables that meet your specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How does BuildTwin ensure the quality and compliance of rebar detailing services provided by vendors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quality and compliance are paramount at BuildTwin. We ensure this via: Pre-Qualified Vendors: All vendors on our platform undergo a rigorous qualification process to verify their expertise and track record. Adherence to International Standards: Our vendors comply with global building codes and standards such as ACI, BS, Eurocode, and others relevant to your project location. AI-Powered Quality Management: Our AI Design Manager assists in checking drawings and documents for accuracy and compliance, reducing errors and omissions. Certified Workflows: We implement standardized workflows that are certified to meet industry best practices, ensuring consistency and reliability in all deliverables. Live Project Tracking: Clients can monitor progress in real-time, allowing for immediate feedback and adjustments as needed."
          }
        },
        {
          "@type": "Question",
          "name": "Can I choose from pre-qualified vendors for rebar detailing services on BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. At BuildTwin, we offer access to a network of pre-qualified vendors specializing in rebar detailing services. You can: Browse Vendor Profiles: View detailed profiles, including past projects, client reviews, and areas of expertise. Compare Bids: Receive and compare bids from multiple vendors to find the best fit for your project budget and timeline. Select Based on Expertise: Choose vendors with specific experience relevant to your project's requirements. Get Global Access: Connect with vendors worldwide, giving you access to a broader talent pool and competitive pricing. Our platform simplifies the vendor selection process, ensuring you find the right partner for your project."
          }
        },
        {
          "@type": "Question",
          "name": "How does BuildTwin's AI technology enhance rebar detailing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At BuildTwin, we leverage AI technology to enhance rebar detailing services in several ways: AI Design Manager: Assists with project management tasks, automates routine processes, and helps in maintaining compliance with industry standards. Automated Quality Checks: AI algorithms review drawings and models for errors, ensuring high-quality outputs. Efficient Communication: AI-powered tools facilitate streamlined communication between clients and vendors, reducing delays. Data Management: Our AI manages project data securely, providing easy access and version control. Predictive Insights: AI provides insights into project timelines and potential bottlenecks, allowing for proactive management. By integrating AI, we help you achieve greater efficiency, accuracy, and productivity in your rebar detailing projects."
          }
        },
        {
          "@type": "Question",
          "name": "What international codes and standards are followed in the rebar detailing services offered through BuildTwin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our vendors adhere to a variety of international codes and standards to ensure that all rebar detailing services meet the required compliance and quality benchmarks. These include: ASTM - American Society of Testing Materials ACI - American Concrete Institute CRSI - Concrete Reinforcing Steel Institute NZS - New Zealand Standards AS - Australian Standards BS - British Standards Eurocode (EN) - European Standards CSA - Canadian Standards Association DIN - Deutsches Institut für Normung (German Standards) IS - Indian Standards JIS - Japanese Industrial Standards SNI - Standar Nasional Indonesia (Indonesian Standards) SANS - South African National Standards Other Regional Standards: Depending on the project's location and specific requirements Compliance with these standards ensures that the rebar detailing is suitable for structural integrity, safety, and durability, meeting both local and international regulations."
          }
        }
      ]
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForBimServices(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What BIM services does BuildTwin offer through its platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BuildTwin provides comprehensive BIM (Building Information Modeling) services to streamline your architectural, engineering, and construction projects. Our offerings include: 3D Modeling and Visualization: Creation of detailed 3D models for better project visualization and decision-making. BIM Coordination and Clash Detection: Identifying and resolving conflicts between different building systems before construction begins. 4D and 5D BIM Services: Integrating time (4D) and cost (5D) data into your BIM models for enhanced project planning and budgeting. BIM Consulting and Implementation: Assisting in the adoption of BIM processes and best practices within your organization. Facility Management BIM (6D BIM): Providing models enriched with data for maintenance and operation post-construction. LOD (Level of Development) Specific Models: Developing models at various LODs (100 to 500) based on project requirements. Our pre-qualified vendors are skilled in using industry-leading BIM software like Autodesk Revit, Navisworks, and more, ensuring high-quality deliverables tailored to your project's needs."
        }
      }, {
        "@type": "Question",
        "name": "Why do I need BIM for my construction projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BIM (Building Information Modeling) offers numerous benefits for construction projects, including: Enhanced Collaboration: BIM facilitates better communication among architects, engineers, contractors, and stakeholders through a centralized 3D model. Improved Visualization: 3D models provide a clear understanding of the project, reducing misunderstandings and errors. Clash Detection: Early identification of conflicts between building systems saves time and costs associated with rework. Efficient Project Management: BIM integrates various aspects like design, materials, time, and cost, allowing for more effective project planning and execution. Cost and Time Savings: By streamlining processes and reducing errors, BIM helps in minimizing delays and budget overruns. Lifecycle Management: BIM models serve as valuable resources for facility management after construction is completed. Implementing BIM leads to more efficient, accurate, and successful project outcomes."
        }
      }, {
        "@type": "Question",
        "name": "How does BIM differ from traditional 3D CAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While both BIM and traditional 3D CAD involve creating digital representations of buildings, there are significant differences: Data Integration: BIM models are data-rich, containing detailed information about each element's properties, whereas 3D CAD models primarily represent geometry. Collaboration: BIM enables real-time collaboration among various stakeholders, whereas 3D CAD is often limited to individual disciplines. Lifecycle Management: BIM supports the entire lifecycle of a building, from design and construction to operation and maintenance. 3D CAD typically focuses on the design phase only. Clash Detection and Analysis: BIM provides advanced tools for clash detection and project analysis, which are not inherent in traditional 3D CAD. 4D, 5D, and Beyond: BIM extends to include time (4D), cost (5D), sustainability (6D), and facility management (7D), offering a more comprehensive approach than 3D CAD. In essence, BIM is a holistic process that enhances collaboration, efficiency, and decision-making throughout a project's lifecycle."
        }
      }, {
        "@type": "Question",
        "name": "What are the challenges in BIM implementation, and how can BuildTwin help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementing BIM can present several challenges: Technical Expertise: Requires skilled professionals proficient in BIM software and processes. Initial Costs: Investment in software, hardware, and training can be substantial. Process Changes: Transitioning from traditional methods to BIM necessitates changes in workflows and collaboration practices. Data Management: Handling large amounts of data securely and efficiently can be complex. Standardization: Ensuring compliance with industry standards and project-specific requirements. How BuildTwin Helps: Access to Experts: Connect with pre-qualified BIM professionals and vendors who bring the necessary expertise to your projects. Cost-Effective Solutions: By outsourcing BIM services through BuildTwin, you can reduce the need for significant upfront investments. Training Programs: BuildTwin offers training to upskill your team in BIM practices and software. Streamlined Processes: Our platform provides AI-powered project management tools to simplify workflows and enhance collaboration. Compliance Assurance: Vendors adhere to international BIM standards and project-specific requirements, ensuring high-quality deliverables. BuildTwin simplifies BIM adoption, helping you overcome implementation challenges effectively."
        }
      }, {
        "@type": "Question",
        "name": "Which BIM Level of Development (LOD) is required for my AEC project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The appropriate Level of Development (LOD) for your project depends on various factors, including the project's phase, complexity, and specific requirements. LOD levels range from 100 to 500: LOD 100 (Conceptual Design): Basic massing models representing overall project intent. LOD 200 (Schematic Design): Generalized systems and assemblies with approximate quantities, size, shape, and location. LOD 300 (Detailed Design): Precise modeling with specific assemblies, accurate quantities, and dimensions suitable for coordination. LOD 350 (Construction Documentation): Includes interfaces between building elements, supporting detailed coordination. LOD 400 (Fabrication and Assembly): Models include complete fabrication and assembly information. LOD 500 (As-Built): Represents the project as constructed, useful for operations and maintenance. How BuildTwin Assists: Our vendors can deliver BIM models at any LOD required for your project. We recommend: Early Phases: Start with LOD 100-200 for conceptual and schematic designs. Design Development: Progress to LOD 300-350 for detailed coordination and construction documentation. Construction and Fabrication: Utilize LOD 400 for fabrication details. Facility Management: Employ LOD 500 for as-built models for long-term maintenance. Our experts can guide you in selecting the appropriate LOD to meet your project's needs and objectives."
        }
      }]
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }

  injectFAQSchemaForBimServiceProvider(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{ 

    "@type": "Question", 

    "name": "Why are building information models important?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "Building Information Models (BIM) are crucial in the architecture, engineering, and construction industries for several reasons: Enhanced Visualization: BIM facilitates the creation of detailed 3D models, allowing for improved visualization of the project before construction begins. This aids in better decision-making and planning. Increased Collaboration: By maintaining a single, shared model, BIM improves coordination among various stakeholders, including architects, engineers, and contractors, leading to more streamlined project management. Efficiency and Accuracy: BIM helps in detecting potential conflicts and issues early in the design phase, reducing errors, saving time, and minimizing costly revisions during construction. Cost Management: Integrating cost and scheduling into BIM (as 4D and 5D BIM) allows for more accurate budgeting and resource allocation, preventing overruns. Lifecycle Management: Post-construction, BIM models serve as a resource for facility management, containing detailed information useful for maintenance and operations. Overall, BIM increases the efficiency, accuracy, and manageability of construction projects from conception through to completion and beyond." 

    } 

  },{ 

    "@type": "Question", 

    "name": "What BIM services does BuildTwin offer through its platform?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "BuildTwin provides comprehensive BIM (Building Information Modeling) services to streamline your architectural, engineering, and construction projects. Our offerings include: 3D Modeling and Visualization: Creation of detailed 3D models for better project visualization and decision-making. BIM Coordination and Clash Detection: Identifying and resolving conflicts between different building systems before construction begins. 4D and 5D BIM Services: Integrating time (4D) and cost (5D) data into your BIM models for enhanced project planning and budgeting. BIM Consulting and Implementation: Assisting in the adoption of BIM processes and best practices within your organization. Facility Management BIM (6D BIM): Providing models enriched with data for maintenance and operation post-construction. LOD (Level of Development) Specific Models: Developing models at various LODs (100 to 500) based on project requirements. Our pre-qualified vendors are skilled in using industry-leading BIM software like Autodesk Revit, Navisworks, and more, ensuring high-quality deliverables tailored to your project's needs." 

    } 

  },{ 

    "@type": "Question", 

    "name": "Why do I need BIM for my construction projects?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "BIM (Building Information Modeling) offers numerous benefits for construction projects, including: Enhanced Collaboration: BIM facilitates better communication among architects, engineers, contractors, and stakeholders through a centralized 3D model. Improved Visualization: 3D models provide a clear understanding of the project, reducing misunderstandings and errors. Clash Detection: Early identification of conflicts between building systems saves time and costs associated with rework. Efficient Project Management: BIM integrates various aspects like design, materials, time, and cost, allowing for more effective project planning and execution. Cost and Time Savings: By streamlining processes and reducing errors, BIM helps in minimizing delays and budget overruns. Lifecycle Management: BIM models serve as valuable resources for facility management after construction is completed. Implementing BIM leads to more efficient, accurate, and successful project outcomes." 

    } 

  },{ 

    "@type": "Question", 

    "name": "How does BIM differ from traditional 3D CAD?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "While both BIM and traditional 3D CAD involve creating digital representations of buildings, there are significant differences: Data Integration: BIM models are data-rich, containing detailed information about each element's properties, whereas 3D CAD models primarily represent geometry. Collaboration: BIM enables real-time collaboration among various stakeholders, whereas 3D CAD is often limited to individual disciplines. Lifecycle Management: BIM supports the entire lifecycle of a building, from design and construction to operation and maintenance. 3D CAD typically focuses on the design phase only. Clash Detection and Analysis: BIM provides advanced tools for clash detection and project analysis, which are not inherent in traditional 3D CAD. 4D, 5D, and Beyond: BIM extends to include time (4D), cost (5D), sustainability (6D), and facility management (7D), offering a more comprehensive approach than 3D CAD. In essence, BIM is a holistic process that enhances collaboration, efficiency, and decision-making throughout a project's lifecycle." 

    } 

  },{ 

    "@type": "Question", 

    "name": "What are the challenges in BIM implementation, and how can BuildTwin help?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "Implementing BIM can present several challenges: Technical Expertise: Requires skilled professionals proficient in BIM software and processes. Initial Costs: Investment in software, hardware, and training can be substantial. Process Changes: Transitioning from traditional methods to BIM necessitates changes in workflows and collaboration practices. Data Management: Handling large amounts of data securely and efficiently can be complex. Standardization: Ensuring compliance with industry standards and project- specific requirements. How BuildTwin Helps: Access to Experts: Connect with pre-qualified BIM professionals and vendors who bring the necessary expertise to your projects. Cost-Effective Solutions: By outsourcing BIM services through BuildTwin, you can reduce the need for significant upfront investments. Training Programs: BuildTwin offers training to upskill your team in BIM practices and software. Streamlined Processes: Our platform provides AI-powered project management tools to simplify workflows and enhance collaboration. Compliance Assurance: Vendors adhere to international BIM standards and project-specific requirements, ensuring high-quality deliverables. BuildTwin simplifies BIM adoption, helping you overcome implementation challenges effectively." 

    } 

  },{ 

    "@type": "Question", 

    "name": "How does digital prototyping with BIM enhance traditional 3D modeling?", 

    "acceptedAnswer": {
      "@type": "Answer", 

      "text": "Digital prototyping with Building Information Modeling (BIM) offers several advancements over traditional 3D modeling: Integrated Information: BIM extends beyond simple 3D geometry by incorporating additional data layers like time schedules and costs, known as 5D BIM, enhancing project planning and financial management. Facility Management and Operations: BIM integrates facility management and operational data early in the design stage, including simulations and asset optimization, fostering preemptive error identification and corrections. Transparent and Optimized Assets: The use of as-built BIM models as digital twins ensures the transparency and optimization of the final asset for maximum operational excellence. Cost and Time Efficiency: By evolving from 3D to 7D capabilities, BIM facilitates clash detection during the design phase, significantly reducing traditional capital expenditure losses and enhancing efficiency during the design, construction, and operational phases." 

    } 

  },{ 

    "@type": "Question", 

    "name": "What range of BIM services does BuildTwin provide in the USA?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "BuildTwin connects with vendors providing a comprehensive of BIM services tailored to the USA construction and AEC market: Core Modeling and Visualization: Offers services such as 3D BIM Modeling, BIM Coordination, and Shop Drawing Service to enhance visualization and coordination. Integrated Project Delivery: Includes 4D BIM for scheduling and 5D BIM for budgeting, facilitating integrated project management through advanced BIM technologies. Specialized Services: Provides niche services like Facade Detailing, Scan to BIM, and Point Cloud to BIM, catering to specific needs within complex projects. Consulting and Implementation: BIM Consulting and BIM Implementation services support firms in adopting and optimizing BIM technologies. Technical and Analytical Services: Includes services like MEP BIM, Structural BIM, and Quantity Take-Off for detailed analysis and accurate planning. Advanced Applications: Features services like BIM Automation and Cobie Services, pushing the envelope in BIM efficiency and data management. Sector-Specific Solutions: Offers BIM for Infrastructure and Civil, addressing the unique requirements of large-scale and specialized construction projects." 

    } 

  },{ 

    "@type": "Question", 

    "name": "What are the standard codes followed by BuildTwin in the USA?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "BuildTwin upholds rigorous quality standards by adhering to key U.S. construction and engineering codes: ASTM: Follows guidelines set by the American Society for Testing and Materials, ensuring materials and processes meet high-quality standards. ACI: Adheres to the American Concrete Institute standards, which govern concrete design, construction, and materials. CRSI: Complies with standards from the Concrete Reinforcing Steel Institute, focusing on the best practices for the use of reinforced steel." 

    } 

  },{ 

    "@type": "Question", 

    "name": "Which BIM Level of Development (LOD) is required for my AEC project?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "The appropriate Level of Development (LOD) for your project depends on various factors, including the project's phase, complexity, and specific requirements. LOD levels range from 100 to 500: LOD 100 (Conceptual Design): Basic massing models representing overall project intent. LOD 200 (Schematic Design): Generalized systems and assemblies with approximate quantities, size, shape, and location. LOD 300 (Detailed Design): Precise modeling with specific assemblies, accurate quantities, and dimensions suitable for coordination. LOD 350 (Construction Documentation): Includes interfaces between building elements, supporting detailed coordination. LOD 400 (Fabrication and Assembly): Models include complete fabrication and assembly information. LOD 500 (As-Built): Represents the project as constructed, useful for operations and maintenance. How BuildTwin Assists: Our vendors can deliver BIM models at any LOD required for your project. We recommend: Early Phases: Start with LOD 100-200 for conceptual and schematic designs. Design Development: Progress to LOD 300-350 for detailed coordination and construction documentation. Construction and Fabrication: Utilize LOD 400 for fabrication details. Facility Management: Employ LOD 500 for as-built models for long-term maintenance. Our experts can guide you in selecting the appropriate LOD to meet your project's needs and objectives." 

    } 

  },{ 

    "@type": "Question", 

    "name": "What are some notable projects completed by BuildTwin vendors in the USA?", 

    "acceptedAnswer": { 

      "@type": "Answer", 

      "text": "Las Vegas Raiders Stadium, Nevada: A state-of-the-art sports facility. Port Everglades Terminal 25, Florida: A modernized cruise terminal. ThyssenKrupp Printing and Milwaukee Arena, Wisconsin: Key industrial and entertainment venues. Madison Nakoosa Trail, Wisconsin: An infrastructure upgrade project. Jacksonville Transportation, Florida: Enhancements to transportation infrastructure. MOLSON Coors, Golden, Colorado: Facility improvements for a major brewery. NECCO Street, Concord Parkway South, NC: Urban development project. SCI Mission, Fort Gordon, GA: Government facility construction. CMH062 Building 5, New Albany, OH: Commercial real estate development. GREAT Lakes Cheese, New York: Industrial facility expansion. These projects demonstrate BuildTwin's platform capacity to manage and deliver large-scale, complex projects across various sectors." 

    } 

    }] 
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }

  injectFAQSchemaForSteelUSAServiceProvider(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{ 

        "@type": "Question", 
    
        "name": "What steel detailing services does BuildTwin offer through its platform?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "BuildTwin provides a comprehensive suite of structural steel detailing services for construction and engineering projects in America. Our offerings include: ●	Shop Drawing Services: Detailed steel shop drawings for steel components like beams, columns, trusses, and connections. ●	Erection Drawings: Accurate design drawings outlining the assembly and installation of steel structures on-site. ●	Structural 3D Modeling: Advanced structural 3D modeling using leading software like Tekla Structures and AutoCAD for precise visualization. ●	Connection Design: Comprehensive design and detailing of bolted and welded connections to ensure structural integrity. ●	Material Lists: Bill of materials (BOM), including quantities, sizes, and specifications for procurement. ●	Clash Detection: Identifying and resolving conflicts within the steel framework and other building systems. ●	Miscellaneous Steel Detailing: Detailing for custom steel elements like stairs, handrails, ladders, and platforms. Our pre-qualified steel detailing vendors in USA deliver high-quality structural steel detailing services tailored to the specific needs of your project." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "How does BuildTwin ensure the quality and accuracy of steel detailing services?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "At BuildTwin, we prioritize quality and accuracy in every aspect of our steel detailing services to ensure structural safety and project success. We achieve this by: ●	Pre-Qualified Vendors: All our steel detailers undergo a thorough vetting process to verify their expertise and track record in structural steel detailing in USA. ●	International Standards Compliance: Our vendors comply with global and American standards such as AISC, BS, Eurocode, and AWS for welding. ●	AI-Powered Quality Management: Our AI Design Manager reviews shop drawings and models for errors, helping maintain high levels of accuracy and compliance. ●	Certified Workflows: We implement standardized, certified workflows to guarantee consistency and reliability in shop drawing services in USA. ●	Live Project Tracking: Track project progress in real-time and collaborate seamlessly with steel detailing vendors in USA. ●	Regular Updates and Reviews: Receive frequent updates and review each stage of the project, ensuring continuous quality improvement. Through a combination of experienced steel detailers, advanced technology, and proven processes, we ensure the highest quality structural detailing services in USA for your project." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Can I choose from pre-qualified vendors for steel detailing services on BuildTwin?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, BuildTwin offers access to a network of pre-qualified steel detailing vendors in USA. You can: ●	Browse Vendor Profiles: Review detailed profiles, past projects, client feedback, and areas of expertise. ●	Compare Bids: Receive proposals from multiple steel detailing vendors to select the best match for your project and budget. ●	Select Based on Expertise: Choose vendors who specialize in specific aspects of structural steel detailing that align with your project’s needs. ●	Global Access: In addition to American vendors, you can connect with global experts, offering a broader range of choices for your steel detailing projects. Our platform simplifies vendor selection, making it easy to find the right partner for your steel detailing services." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What American codes and standards are followed in the steel detailing services offered through BuildTwin?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Our steel detailing services adhere to a variety of international codes and standards to ensure compliance and quality, including: ●	AISC: American Institute of Steel Construction ●	ASTM: American Society for Testing and Materials ●	NISD: National Institute of Steel Detailing ●	ACI: American Concrete Institute ●	RCSC: Research Council on Structural Connections ●	CRSI: Concrete Reinforcing Steel Institute ●	AWS: American Welding Society ●	Other regional codes based on your project's location and specific requirements. By adhering to these standards, we ensure that your steel structures are designed and detailed according to the highest safety and quality benchmarks in America." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "How does BuildTwin's AI technology enhance steel detailing projects?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "BuildTwin integrates AI technology to enhance various aspects of steel detailing services, improving efficiency and accuracy: ●	AI Design Manager: Assists with project management tasks, automating routine processes and ensuring compliance with industry standards. ●	Automated Quality Checks: AI algorithms review shop drawings and models for errors, ensuring precision. ●	Efficient Communication: Streamlines communication between clients and steel detailers, reducing project delays. ●	Data Management: Securely manages your project data, offering easy access and version control. ●	Predictive Insights: Provides insights into project timelines and potential bottlenecks, helping you manage your project proactively. With AI at its core, BuildTwin helps you achieve superior structural steel detailing with improved efficiency, accuracy, and project outcomes." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What Software Tools are Used for Structural Steel Detailing in USA?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Professionals in structural steel detailing commonly rely on advanced software tools like Tekla Structures, AutoCAD, and SDS2. These tools enable the creation of detailed steel shop drawings, 2D and 3D models, as well as accurate fabrication drawings." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What Information is Included in Structural Steel Detailing?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Structural steel detailing includes comprehensive information for fabricating and assembling steel components. This includes: ●	Size, shape, and dimensions of steel components ●	Welding specifications, bolt sizes, and locations ●	Connection details for beams, columns, and trusses ●	Material specifications ●	Design drawings and other relevant construction details This detailed information ensures proper fabrication and seamless installation of the steel components in your project." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Can Structural Steel Detailing Be Customized for Unique Projects?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, structural steel detailing can be fully customized to meet the specific requirements of your project. Our steel detailing vendors collaborate closely with clients to understand their needs, tailoring steel detailing services to accommodate custom designs, unique components, and specific project conditions." 
    
        } 
    
      }] 
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }

  injectFAQSchemaForDurchgeplant(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [{ 
    
        "@type": "Question", 
    
        "name": "Durchgeplant Planning and Management GmbH general business conditions at a glance", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Your reliable partner for the planning of your precast concrete elements." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Can Durchgeplant also support me with an already ongoing project?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, Durchgeplant can support you with ongoing projects by providing additional expertise and resources to ensure project success." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "How quickly can I get a quote for my request?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "You can receive a quote for your request within 48 hours. Our team works quickly to provide accurate and competitive pricing." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "With which CAD programs does Durchgeplant work?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Durchgeplant works with various CAD programs including AutoCAD, Revit, and Tekla Structures to meet diverse project needs." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Can Durchgeplant provide reinforcement data for mesh welding machines?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, Durchgeplant can provide reinforcement data for mesh welding machines, ensuring precise and efficient production processes." 
    
        } 
    
      }] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForCaldim(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [ 
    
        { 
    
          "@type": "Question", 
    
          "name": "Caldim general business conditions at a glance", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Your reliable partner for the planning of your precast concrete elements." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Caldim also support me with an already ongoing project?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Caldim can support you with ongoing projects by providing additional expertise and resources to ensure project success." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "How quickly can I get a quote for my request?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "You can receive a quote for your request within 48 hours. Our team works quickly to provide accurate and competitive pricing." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "With which CAD programs does Caldim work?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Caldim works with various CAD programs including AutoCAD, Revit, and Tekla Structures to meet diverse project needs." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Caldim provide reinforcement data for mesh welding machines?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Caldim can provide reinforcement data for mesh welding machines, ensuring precise and efficient production processes." 
    
          } 
    
        } 
    
      ] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForSublime(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [ 
    
        { 
    
          "@type": "Question", 
    
          "name": "Sublime Structures general business conditions at a glance", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Your reliable partner for the planning of your precast concrete elements." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Sublime Structures also support me with an already ongoing project?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Sublime Structures can support you with ongoing projects by providing additional expertise and resources to ensure project success." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "How quickly can I get a quote for my request?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "You can receive a quote for your request within 48 hours. Our team works quickly to provide accurate and competitive pricing." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "With which CAD programs does Sublime Structures work?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Sublime Structures works with various CAD programs including AutoCAD, Revit, and Tekla Structures to meet diverse project needs." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Sublime Structures provide reinforcement data for mesh welding machines?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Sublime Structures can provide reinforcement data for mesh welding machines, ensuring precise and efficient production processes." 
    
          } 
    
        } 
    
      ] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForjfindia(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [ 
    
        { 
    
          "@type": "Question", 
    
          "name": "What will I learn in the BuildTwin program?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "In the BuildTwin program, you will learn about advanced building information modeling (BIM), digital twin technology, and how to apply these concepts to real-world projects to improve efficiency and accuracy." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "How long is the typical course?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "The typical course duration is 12 weeks, with a mix of online lectures, hands-on projects, and collaborative assignments." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Do I need previous experience with ALLPLAN?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "No, previous experience with ALLPLAN is not required. The course includes an introductory module to help you get up to speed with the software." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "What are the technical requirements?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "The technical requirements include a computer with at least 8GB of RAM, an internet connection, and basic knowledge of construction and architecture principles." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "J&F company business terms & conditions at a glance", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "The course is specifically designed for engineers, architects, and project managers seeking to meet the unique demands of specific international markets and real client requirements." 
    
          } 
    
        } 
    
      ] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForMoldTektechnologieslimited(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [ 
    
        { 
    
          "@type": "Question", 
    
          "name": "Moldtek general business conditions at a glance", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Your reliable partner for the planning of your precast concrete elements." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Moldtek also support me with an already ongoing project?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Moldtek can support you with ongoing projects by providing additional expertise and resources to ensure project success." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "How quickly can I get a quote for my request?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "You can receive a quote for your request within 48 hours. Our team works quickly to provide accurate and competitive pricing." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "With which CAD programs does Moldtek work?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Moldtek works with various CAD programs including AutoCAD, Revit, and Tekla Structures to meet diverse project needs." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Moldtek provide reinforcement data for mesh welding machines?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Moldtek can provide reinforcement data for mesh welding machines, ensuring precise and efficient production processes." 
    
          } 
    
        } 
    
      ] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForGbcEngineers(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [ 
    
        { 
    
          "@type": "Question", 
    
          "name": "GBC general business conditions at a glance", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Your reliable partner for the planning of your precast concrete elements." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can GBC also support me with an already ongoing project?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, GBC can support you with ongoing projects by providing additional expertise and resources to ensure project success." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "How quickly can I get a quote for my request?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "You can receive a quote for your request within 48 hours. Our team works quickly to provide accurate and competitive pricing." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "With which CAD programs does GBC work?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "GBC works with various CAD programs including AutoCAD, Revit, and Tekla Structures to meet diverse project needs." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can GBC provide reinforcement data for mesh welding machines?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, GBC can provide reinforcement data for mesh welding machines, ensuring precise and efficient production processes." 
    
          } 
    
        } 
    
      ] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }
  injectFAQSchemaForAarbeeStructuresPrivateLimited(renderer) {
    // Create the FAQ schema for the FAQ page
    const faqSchema = { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [ 
    
        { 
    
          "@type": "Question", 
    
          "name": "Aarbee general business conditions at a glance", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Your reliable partner for the planning of your precast concrete elements." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Aarbee also support me with an already ongoing project?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Aarbee can support you with ongoing projects by providing additional expertise and resources to ensure project success." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "How quickly can I get a quote for my request?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "You can receive a quote for your request within 48 hours. Our team works quickly to provide accurate and competitive pricing." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "With which CAD programs does Aarbee work?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Aarbee works with various CAD programs including AutoCAD, Revit, and Tekla Structures to meet diverse project needs." 
    
          } 
    
        }, 
    
        { 
    
          "@type": "Question", 
    
          "name": "Can Aarbee provide reinforcement data for mesh welding machines?", 
    
          "acceptedAnswer": { 
    
            "@type": "Answer", 
    
            "text": "Yes, Aarbee can provide reinforcement data for mesh welding machines, ensuring precise and efficient production processes." 
    
          } 
    
        } 
    
      ] 
    
    };

    // Create the script element
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // // Append the script to the head of the document
    // renderer.appendChild(document.head, jsonLdScriptTag);
    return JSON.stringify(faqSchema);
  }

}
