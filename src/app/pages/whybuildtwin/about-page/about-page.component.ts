import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

    // title = 'BuildTwin - about the hub for engineering';
    
    // Management Team Data
    managementTeam = [
        {
            name: 'John Smith',
            role: 'Chief Executive Officer',
            photo: 'assets/images/placeholder.png',
            cvPreview: '20+ years of experience in structural engineering and technology leadership...',
            fullCV: 'John Smith is a seasoned executive with over 20 years of experience in structural engineering and technology leadership. He has successfully led multiple engineering firms and technology startups, specializing in digital transformation within the AEC industry. John holds a Master\'s degree in Civil Engineering from MIT and has been instrumental in developing innovative solutions for structural detailing challenges.',
            isExpanded: false
        },
        {
            name: 'Sarah Johnson',
            role: 'Chief Technology Officer',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Expert in AI and machine learning applications for engineering...',
            fullCV: 'Sarah Johnson is a technology visionary with deep expertise in AI and machine learning applications for engineering. She has led the development of several breakthrough AI solutions in the construction industry and holds multiple patents in automated design systems. Sarah earned her PhD in Computer Science from Stanford University and has over 15 years of experience in software engineering.',
            isExpanded: false
        },
        {
            name: 'Michael Chen',
            role: 'Chief Operations Officer',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Operations expert with focus on scaling engineering services...',
            fullCV: 'Michael Chen brings extensive operational expertise to BuildTwin, having successfully scaled multiple engineering service companies. He specializes in process optimization and has implemented lean methodologies across various engineering disciplines. Michael holds an MBA from Harvard Business School and has over 18 years of experience in operations management.',
            isExpanded: false
        },
        {
            name: 'David Wilson',
            role: 'Chief Financial Officer',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Financial strategist with expertise in AEC industry investments...',
            fullCV: 'David Wilson is a seasoned financial executive with over 15 years of experience in the AEC industry. He has successfully managed financial operations for major construction companies and has expertise in strategic financial planning, mergers and acquisitions, and investor relations. David holds an MBA in Finance from Wharton School.',
            isExpanded: false
        }
    ];

    // Advisors Team Data
    advisorsTeam = [
        {
            name: 'Dr. Emily Rodriguez',
            role: 'Technical Advisor',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Leading expert in structural engineering and building codes...',
            fullCV: 'Dr. Emily Rodriguez is a distinguished professor of Structural Engineering at UC Berkeley and a leading expert in building codes and standards. She has served on numerous national committees and has published over 100 peer-reviewed papers. Dr. Rodriguez advises on technical standards and innovation in structural detailing.',
            isExpanded: false
        },
        {
            name: 'Robert Williams',
            role: 'Industry Advisor',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Former VP of Engineering at major construction firms...',
            fullCV: 'Robert Williams brings 25+ years of industry experience, having served as VP of Engineering at several major construction firms. He has overseen projects worth over $10 billion and has deep insights into industry challenges and opportunities. Robert advises on market strategy and industry partnerships.',
            isExpanded: false
        },
        {
            name: 'Lisa Thompson',
            role: 'Financial Advisor',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Investment banking expert specializing in construction technology...',
            fullCV: 'Lisa Thompson is a senior investment banker with Goldman Sachs, specializing in construction technology and engineering services. She has advised on over $50 billion in M&A transactions and brings valuable insights into financial strategy and market positioning.',
            isExpanded: false
        },
        {
            name: 'Dr. James Anderson',
            role: 'Innovation Advisor',
            photo: 'assets/images/placeholder.png',
            cvPreview: 'Leading researcher in construction technology and digital transformation...',
            fullCV: 'Dr. James Anderson is a distinguished researcher at MIT\'s Department of Civil and Environmental Engineering, specializing in construction technology and digital transformation. He has published over 80 peer-reviewed papers and holds 15 patents in construction automation. Dr. Anderson advises on cutting-edge technology integration.',
            isExpanded: false
        }
    ];
 
    constructor(private titleService:Title) {}
    
    ngOnInit() {
        // this.titleService.setTitle(this.title);
    }

    // Toggle CV expansion
    toggleCV(member: any) {
        member.isExpanded = !member.isExpanded;
    }

}