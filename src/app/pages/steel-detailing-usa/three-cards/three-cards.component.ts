import { Component, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-steel-detailing-usa-three-cards',
  // standalone: true,
  // imports: [],
  templateUrl: './three-cards.component.html',
  styleUrl: './three-cards.component.scss'
})
export class SteelDetailingUsaThreeCardsComponent {

  ngAfterViewInit() {
    this.setupDropdownListeners();
  }

  setupDropdownListeners() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    
    dropdownMenus.forEach(menu => {
      const summary = menu.querySelector('summary');
      
      summary.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default details behavior
        
        // Toggle all dropdowns
        dropdownMenus.forEach(otherMenu => {
          const otherDetails = otherMenu as HTMLDetailsElement;
          otherDetails.open = !otherDetails.open;
        });
      });
    });
  }

  // isDropdownVisible = false;

  // toggleDropdown() {
  //   this.isDropdownVisible = !this.isDropdownVisible;
  // }
}
