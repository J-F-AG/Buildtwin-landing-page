import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
    selector: 'app-hd-pricing',
    templateUrl: './hd-pricing.component.html',
    styleUrls: ['./hd-pricing.component.scss']
})
export class HdPricingComponent implements OnInit, OnDestroy {

    activeSection: string = 'payments';

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
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }

    // Track scroll position to update active sidebar item
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        // This would be used to track which section is currently in view
        // and update the active state in the sidebar accordingly
    }
}
