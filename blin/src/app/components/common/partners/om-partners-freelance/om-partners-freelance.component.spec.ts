import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmPartnersFreelanceComponent } from './om-partners-freelance.component';

describe('OmPartnersFreelanceComponent', () => {
  let component: OmPartnersFreelanceComponent;
  let fixture: ComponentFixture<OmPartnersFreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmPartnersFreelanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmPartnersFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
