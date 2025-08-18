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
    question: "Does BuildTwin Pro comply with industry standards for data security?",
    answer: "<strong>Yes.</strong><br> BuildTwin Pro complies with major industry standards for data security, including ISO/IEC 27001, GDPR (for users in the EU), and other applicable regional regulations. We continuously review and update our security protocols to align with best practices in the construction and data management industries."
  },
  {
    question: "Where is my data hosted?",
    answer: "<strong>Your data is hosted within your region of use.</strong><br> BuildTwin Pro uses localized cloud infrastructure to ensure compliance with data residency laws. For example, EU users’ data stays within the EU, and the same applies for other regions (e.g., US, India, GCC). This ensures faster access and full legal compliance."
  },
  {
    question: "Is my data encrypted?",
    answer: "<strong>Yes, end-to-end.</strong><br> All data on BuildTwin Pro is encrypted in transit using TLS 1.2+ and at rest using AES-256. Whether you’re uploading, sharing, or storing files, your data remains fully protected with industry-grade encryption."
  },
  {
    question: "Who can access my data?",
    answer: "<strong>Only you and authorized users.</strong><br> Access to your files is controlled via role-based permissions and secure links. You decide who can view, comment, or edit. BuildTwin Pro staff do not have access to your data unless explicitly requested for support purposes and with your consent."
  },
  {
    question: "Can I delete my account and data?",
    answer: "<strong>Yes.</strong><br> To request account and data deletion, please contact our support team at hello@buildtwin.com. Upon verification, all your data will be permanently deleted from our systems, including backups, within 30 days, in accordance with GDPR and other privacy standards."
  },
  {
    question: "How long is my data retained?",
    answer: "We retain your data for as long as your account is active or as needed to provide you services. You can request deletion at any time. Backups are retained for disaster recovery and are automatically purged within 30 days."
  },
  {
    question: "Does BuildTwin Pro support audit trails?",
    answer: "<strong>Yes.</strong><br> Every action on BuildTwin Pro is logged and time-stamped. You get a complete audit trail for uploads, comments, status changes, and file shares—ensuring accountability and traceability for all project stakeholders."
  },
  {
    question: "Is BuildTwin Pro compliant with GDPR, CCPA, and other privacy laws?",
    answer: "<strong>Yes.</strong><br> BuildTwin Pro is fully compliant with GDPR, CCPA, and applicable data protection regulations. You can request a copy of your data, rectify inaccuracies, or ask for permanent deletion at any time."
  },
  {
    question: "Does BuildTwin Pro undergo security audits?",
    answer: "<strong>Yes.</strong><br> We conduct regular third-party security audits and penetration tests to identify and address vulnerabilities. Security is a core part of our development and operations lifecycle (DevSecOps)."
  }
];


}