import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('AirportsFaqBuildtwinComponent', () => {
  let component: AirportsFaqBuildtwinComponent;
  let fixture: ComponentFixture<AirportsFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportsFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirportsFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
