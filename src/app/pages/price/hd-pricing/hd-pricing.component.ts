import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-hd-pricing',
    templateUrl: './hd-pricing.component.html',
    styleUrls: ['./hd-pricing.component.scss']
})
export class HdPricingComponent implements OnInit, OnDestroy {

    activeSection: string = 'hero';
    activeTab: string = 'hero';

    constructor() {}

    ngOnInit() {}

    ngOnDestroy() {}

    call() {
        // Open contact sales form or redirect to contact page
        window.open('https://www.buildtwin.com/contact', '_blank');
    }

    // Handle sidebar navigation clicks
    scrollToSection(sectionId: string) {
        this.activeSection = sectionId;
        this.activeTab = sectionId;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }

    // Track scroll position to update active sidebar item and navigation tabs
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        const sections = ['hero', 'capability-statement', 'faq'];
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionId = sections[i];
            const element = document.getElementById(sectionId);
            if (element) {
                const elementTop = element.offsetTop;
                if (scrollPosition >= elementTop) {
                    if (this.activeTab !== sectionId) {
                        this.activeTab = sectionId;
                        this.activeSection = sectionId;
                    }
                    break;
                }
            }
        }
    }
}
