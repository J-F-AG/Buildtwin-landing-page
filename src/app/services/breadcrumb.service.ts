    import { Injectable } from '@angular/core';
    import { Router, NavigationEnd } from '@angular/router';
    import { filter } from 'rxjs/operators';

    @Injectable({
    providedIn: 'root'
    })
    export class BreadcrumbService {
    breadcrumbs: any[] = [];

    constructor(private router: Router) {
    }

    generateBreadcrumbs(url: string): void {
        this.breadcrumbs = [];
        const paths = url.split('/').filter(path => path);
        let pathUrl = '';

        paths.forEach((path, index) => {
        pathUrl += `/${path}`;
        this.breadcrumbs.push({
            "@type": "ListItem",
            "position": index + 1,
            "name": this.getDisplayName(path),
            "item": `https://www.buildtwin.com${pathUrl}`
        });
        });
    }

    getDisplayName(path: string): string {
        const names = {
            'explore-services': 'Explore Services',
            'provide-service': 'Provide Service',
            'marketplace': 'Marketplace',
            'partners/J&FIndia': 'J&F India',
            'engineering-services/services': 'Engineering Services - Services',
            'engineering-services/sector': 'Engineering Services - Sector',
            'AI-project-management': 'AI Project Management',
            'business-intelligence': 'Business Intelligence',
            'training': 'Training',
            'pricing': 'Pricing',
            'good-reason': 'Good Reason',
            'data-safety': 'Data Safety',
            'use-cases': 'Use Cases',
            'integrations': 'Integrations',
            'faq': 'FAQ',
            'contact': 'Contact',
            'about': 'About',
            'terms-of-service': 'Terms of Service',
            'privacy-policy': 'Privacy Policy',
            'terms-conditions': 'Terms and Conditions'
        };
        return names[path] || path;
    }
    }
