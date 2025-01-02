import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sectorSampleProjectsComponent } from './sample-projects.component';

describe('sectorSampleProjectsComponent', () => {
  let component: sectorSampleProjectsComponent;
  let fixture: ComponentFixture<sectorSampleProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [sectorSampleProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(sectorSampleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
