import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBuildingFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('CommercialBuildingFaqBuildtwinComponent', () => {
  let component: CommercialBuildingFaqBuildtwinComponent;
  let fixture: ComponentFixture<CommercialBuildingFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialBuildingFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommercialBuildingFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
