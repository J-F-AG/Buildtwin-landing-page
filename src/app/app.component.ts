import { Component } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import * as AOS from "aos";
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {

    title = 'BuildTwin - the hub for engineering AI software, projects and training';
    
    location: any;
    routerSubscription: any;

    constructor(
        public router: Router
    ) {
        AOS.init();
        const currentPath = window.location.pathname + window.location.search;
        if (window.location.pathname.startsWith('/get-started/') && window.location.pathname !== '/get-started') {
            // Code for child pages of get-started
            sessionStorage.setItem('redirectPath', currentPath.replace('/get-started', ''));
            window.location.href = 'https://www.buildtwin.com/get-started/';
        }
    }

    ngOnInit(){
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

}
