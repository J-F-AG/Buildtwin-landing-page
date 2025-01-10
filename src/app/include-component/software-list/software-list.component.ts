import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.scss'
})
export class SoftwareListComponent {
  sections = [
    {
      id: 1,
      routerLink: '/software/structural-steel-detailing',
      title: 'Structural Steel Detailing',
      items: ['Tekla Structures', 'SDS/2']
    },
    {
      id: 2,
      routerLink: '/software/architecture-design-services',
      title: 'Architecture & Structural Design',
      items: ['Autodesk Revit', 'ALLPLAN']
    },
    {
      id: 3,
      routerLink: '/building-code/aisc',
      title: 'AISC Building Code',
      items: ['Trusted AISC Professionals', 'Quality Assurance', 'Global Standards Compliance']
    },
    {
      id: 4,
      routerLink: '/building-code/eurocode',
      title: 'Eurocode',
      items: ['Expert Eurocode Consultants', 'Comprehensive Compliance', 'Rigorous Quality Checks']
    }
  ];
}
