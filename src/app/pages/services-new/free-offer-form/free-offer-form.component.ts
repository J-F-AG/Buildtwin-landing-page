import { Component } from '@angular/core';

@Component({
  selector: 'app-free-offer-form',
  // standalone: true,
  // imports: [],
  templateUrl: './free-offer-form.component.html',
  styleUrl: './free-offer-form.component.scss'
})
export class FreeOfferFormComponent {


  precastServices = [
    {
      label: 'Select software',
      value: 'Select software'
    },
    {
      label: 'software 1',
      value: 'software 1'
    },
    {
      label: 'software 2',
      value: 'software 2'
    },
  ]

  selectedPrecastServices = this.precastServices[0];

  selectService(selectedOption: any) {
    this.selectedPrecastServices = this.precastServices.find(e => e.value === selectedOption);
  }


  
  precastServices2 = [
    {
      label: 'Select building code',
      value: 'Select building code'
    },
    {
      label: 'building code 1',
      value: 'building code 1'
    },
    {
      label: 'building code 2',
      value: 'building code 2'
    },
  ]

  selectedPrecastServices2 = this.precastServices2[0];

  selectService2(selectedOption2: any) {
    this.selectedPrecastServices2 = this.precastServices2.find(e => e.value === selectedOption2);
  }
  
  
  precastServices3 = [
    {
      label: 'Select services addons',
      value: 'Select services addons'
    },
    {
      label: 'addons 1',
      value: 'addons 1'
    },
    {
      label: 'addons 2',
      value: 'addons 2'
    },
  ]

  selectedPrecastServices3 = this.precastServices3[0];

  selectService3(selectedOption3: any) {
    this.selectedPrecastServices3 = this.precastServices3.find(e => e.value === selectedOption3);
  }


}
