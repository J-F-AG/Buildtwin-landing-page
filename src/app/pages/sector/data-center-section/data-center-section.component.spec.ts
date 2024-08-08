import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterSectionComponent } from './data-center-section.component';

describe('DataCenterSectionComponent', () => {
  let component: DataCenterSectionComponent;
  let fixture: ComponentFixture<DataCenterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCenterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
