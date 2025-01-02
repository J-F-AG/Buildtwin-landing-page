import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDataCenterSectionComponent } from './about-data-center-section.component';

describe('AboutDataCenterSectionComponent', () => {
  let component: AboutDataCenterSectionComponent;
  let fixture: ComponentFixture<AboutDataCenterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDataCenterSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDataCenterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
