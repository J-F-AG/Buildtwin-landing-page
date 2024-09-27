import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = [{ lang: "/en", "value": "/" }, { lang: "/de", value: "/de" }]
  currentLanguage = '/';
  serviceId: any = {
    "pre-cast-detailing-services": 9
  }
  constructor(
    private router: Router
  ) {
    let localLanng = window['Localize'].getLanguage()
    if (localLanng == 'en') {
      localLanng = '/'
    }
    this.currentLanguage = localLanng
  }


  getLanguage(url) {


    let languageFound = undefined;
    this.language.forEach((ele) => {
      console.log(url.includes(ele.lang), ele);
      if (url.includes(ele.lang)) {
        languageFound = ele
      }

    })

    if (languageFound && languageFound.value) {
      try {
        window['Localize'].setLanguage(languageFound.value);
      } catch (E) {
        console.log(E)
      }

      this.currentLanguage = languageFound.value;
    }
    console.log(url, languageFound, "language")

  }

  setCanonicalURL() {
    const url = this.router.url;
    const currentUrl = window.location.href; // Get the full URL
    const urlObj = new URL(currentUrl);      // Create a URL object
    const baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;

    let link: HTMLLinkElement = document.querySelector(`link[rel='canonical']`) || null;
    if (link) {
      link.href = baseUrl + url;
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', baseUrl + url);
      document.head.appendChild(link);
    }
  }

  setLanguageTags() {
    const currentUrl = window.location.href; // Get the full URL
    const urlObj = new URL(currentUrl);      // Create a URL object
    const baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;
    const url = this.router.url;
    const fullUrl = baseUrl + url;

    // Define language tags
    const languageTags = [
      { href: `${fullUrl}`, hreflang: 'en' },
      { href: `${fullUrl}`, hreflang: 'de' },
      // { href: `${fullUrl}`, hreflang: 'en-in' },
      // { href: `${fullUrl}`, hreflang: 'en-us' },
      // { href: `${fullUrl}`, hreflang: 'en-gb' },
      // { href: `${fullUrl}`, hreflang: 'de-de' }
    ];

    // Remove existing alternate links
    // const body = document.querySelector('body');
    document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

    // Add new alternate links for each language
    languageTags.forEach(tag => {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('href', tag.href);
      link.setAttribute('hreflang', tag.hreflang);
      document.body.prepend(link);
    });
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

    // Create the JSON-LD script tag
    const jsonLdScriptTag = renderer.createElement('script');
    jsonLdScriptTag.type = 'application/ld+json';
    jsonLdScriptTag.text = JSON.stringify(faqSchema);
    // Append the script tag to the document head
    renderer.appendChild(document.head, jsonLdScriptTag);
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
    const jsonLdScriptTag = renderer.createElement('script');
    jsonLdScriptTag.type = 'application/ld+json';
    jsonLdScriptTag.text = JSON.stringify(MarketplaceSchema);
    // Append the script tag to the document head
    renderer.appendChild(document.head, jsonLdScriptTag);
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
    const jsonLdScriptTag = renderer.createElement('script');
    jsonLdScriptTag.type = 'application/ld+json';
    jsonLdScriptTag.text = JSON.stringify(AIProjectManagementSchema);

    // Append the script to the head of the document
    renderer.appendChild(document.head, jsonLdScriptTag);
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
    const jsonLdScriptTag = renderer.createElement('script');
    jsonLdScriptTag.type = 'application/ld+json';
    jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // Append the script to the head of the document
    renderer.appendChild(document.head, jsonLdScriptTag);
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
    const jsonLdScriptTag = renderer.createElement('script');
    jsonLdScriptTag.type = 'application/ld+json';
    jsonLdScriptTag.text = JSON.stringify(faqSchema);

    // Append the script to the head of the document
    renderer.appendChild(document.head, jsonLdScriptTag);
  }
}
