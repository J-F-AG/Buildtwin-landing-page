import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-good-reason',
  templateUrl: './good-reason.component.html',
  styleUrl: './good-reason.component.scss'
})
export class GoodReasonComponent implements OnInit{
@Input() serviceName: any = '';

ngOnInit(): void {
  
}
}
