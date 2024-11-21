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
        const paths: any = url.split('/').filter(path => path);
        let language = '';
        // if (paths.length) {
        //     if (paths[0] === 'de') {
        //         paths.shift()
        //         language = '/de';
        //     }
        // }

        if (!paths.length) {
            this.breadcrumbs.push({
                "@type": "ListItem",
                "position": 1,
                "name": 'Home',
                "item": `https://www.buildtwin.com${language}`
            });
        }
        let pathArray = this.getDisplayName(paths);
        if (pathArray.length) {
            this.breadcrumbs.push({
                "@type": "ListItem",
                "position": 1,
                "name": 'Home',
                "item": `https://www.buildtwin.com${language}`
            });
            this.breadcrumbs.push({
                "@type": "ListItem",
                "position": 2,
                "name": this.getDisplayName(paths),
                "item": `https://www.buildtwin.com${paths.includes('partners')?url.toLowerCase():url}`
            });
        }
        // paths.forEach((path, index) => {
        // pathUrl += `/${path}`;
        // this.breadcrumbs.push({
        //     "@type": "ListItem",
        //     "position": index + 1,
        //     "name": this.getDisplayName(path),
        //     "item": `https://www.buildtwin.com${pathUrl}`
        // });
        // });
    }

    getDisplayName(path: string): string {
        const names = {
            'explore-services': 'Explore Services',
            'provide-service': 'Provide Service',
            'marketplace': 'Marketplace',
            'partners/J&FIndia': 'J&F India',
            'ai-project-management': 'AI Project Management',
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
            'terms-conditions': 'Terms and Conditions',
            
            'services': 'Services',
            // 'servicesNew': 'Services New'
        };
        let pathUpdated = path;
        if (Array.isArray(path) && path[0] === 'partners') {
            // Update all elements in the array to lowercase
            for (let i = 0; i < path.length; i++) {
              path[i] = path[i].toLowerCase();
            }
            pathUpdated = path
        }
        return names[path] || pathUpdated;
    }
}
