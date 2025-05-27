import { Component, Input} from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-rebar-drawing-freelancers',
  // standalone: true,
  // imports: [],
  templateUrl: './drawing-freelancers.component.html',
  styleUrl: './drawing-freelancers.component.scss'
})
export class RebarDrawingFreelancersComponent {

  constructor(public _languageService: LanguageService,){}
@Input() sectionHeading: any = '';
@Input() subCategoryServices: any = [];
}
