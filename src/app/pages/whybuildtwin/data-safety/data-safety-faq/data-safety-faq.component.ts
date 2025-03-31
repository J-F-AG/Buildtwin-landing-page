import { Component } from '@angular/core';

@Component({
    selector: 'app-data-safety-faq',
    templateUrl: './data-safety-faq.component.html',
    styleUrls: ['./data-safety-faq.component.scss']
})
export class DataSafetyFaqComponent {

    isFirst = true;

    dataCenterFAQ = [
        {
          question: "What is the total floor area of the data center?",
          answer: "The total floor area of the data center is 50,000 square meters."
        },
        {
          question: "Where is the data center located (city, state, country)?",
          answer: "The data center is located in Dallas, Texas, USA."
        },
        {
          question: "When was the project started and completed?",
          answer: "The project started in January 2021 and was completed in December 2022."
        },
        {
          question: "What is the total power capacity of the data center in GWH, and were any energy-efficient designs or technologies implemented?",
          answer: "The total power capacity is 120 GWh. Energy-efficient technologies such as advanced cooling systems and renewable energy integration were implemented."
        },
        {
          question: "What type of structural system was used (e.g., steel frame, concrete frame, etc.)?",
          answer: "The data center was built using a reinforced concrete frame for enhanced durability and load-bearing capacity."
        },
        {
          question: "What were the most significant structural challenges in this project, and how were they addressed?",
          answer: "The biggest challenge was ensuring seismic resilience. This was addressed by incorporating base isolators and reinforced bracing systems."
        },
        {
          question: "What structural analysis and design software was used?",
          answer: "Software such as ETABS, SAP2000, and AutoCAD were used for structural analysis and design."
        },
        {
          question: "Did the project include specialized features such as raised floors, advanced cooling systems, or enhanced security measures? How did the structural design accommodate these?",
          answer: "Yes, the project included raised floors for cabling, advanced cooling systems for energy efficiency, and reinforced security barriers. The structural design incorporated these by ensuring proper load distribution and access pathways."
        },
        {
          question: "Were there any sustainability considerations, such as certifications (e.g., LEED, BREEAM) or use of sustainable materials?",
          answer: "The project achieved LEED Gold certification and used recycled steel and low-carbon concrete."
        },
        {
          question: "What was the scope of your firm’s involvement in the project (e.g., design only, design and supervision, etc.)?",
          answer: "Our firm was responsible for both design and supervision of the structural framework."
        },
        {
          question: "Was this project awarded through a public tender, private tender, or direct commission?",
          answer: "The project was awarded through a private tender."
        },
        {
          question: "What were the design floor loads, and how did the structural design accommodate them?",
          answer: "The design floor load was 12 kN/m². The structural design incorporated reinforced concrete slabs and steel supports to handle high loads."
        },
        {
          question: "Is there any other unique or innovative aspect of the structural design that you would like to highlight?",
          answer: "A modular structural design was used to allow for future expansion without major disruptions."
        }
      ];

}