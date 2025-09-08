import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-drawing-automation',
  templateUrl: './drawing-automation.component.html',
  styleUrls: ['./drawing-automation.component.scss']
})
export class DrawingAutomationComponent implements AfterViewInit {
  cardTransform = '';
  activeSection = 'ai-automation';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupNavigation();
    this.setupScrollAnimations();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    this.cardTransform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  }

  private setupNavigation(): void {
    const navItems = this.elementRef.nativeElement.querySelectorAll('.da-sidebar li[data-section]');
    const sections = this.elementRef.nativeElement.querySelectorAll('.da-section');

    navItems.forEach((item: HTMLElement) => {
      item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        if (sectionId) {
          this.navigateToSection(sectionId);
        }
      });
    });
  }

  private navigateToSection(sectionId: string): void {
    // Update active navigation item
    const navItems = this.elementRef.nativeElement.querySelectorAll('.da-sidebar li[data-section]');
    navItems.forEach((item: HTMLElement) => {
      item.classList.remove('active');
      if (item.getAttribute('data-section') === sectionId) {
        item.classList.add('active');
      }
    });

    // Hide all sections
    const sections = this.elementRef.nativeElement.querySelectorAll('.da-section');
    sections.forEach((section: HTMLElement) => {
      section.classList.remove('active');
    });

    // Show target section
    const targetSection = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
    if (targetSection) {
      targetSection.classList.add('active');
      this.activeSection = sectionId;
    }
  }

  private setupScrollAnimations(): void {
    // Only setup scroll animations after a delay to prevent immediate triggering
    setTimeout(() => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Add animation class when element comes into view
              entry.target.classList.add('animate-in');
            }
          });
        }, { 
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        // Observe all sections for scroll animations
        const sections = this.elementRef.nativeElement.querySelectorAll('.da-section');
        sections.forEach(section => observer.observe(section));
      }
    }, 1000); // 1 second delay to prevent immediate animation
  }
}


