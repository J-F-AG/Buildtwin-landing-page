import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialBuildingFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('ResidentialBuildingFaqBuildtwinComponent', () => {
  let component: ResidentialBuildingFaqBuildtwinComponent;
  let fixture: ComponentFixture<ResidentialBuildingFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentialBuildingFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentialBuildingFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
