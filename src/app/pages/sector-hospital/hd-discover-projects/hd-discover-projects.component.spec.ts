import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('HospitalHdDiscoverProjectsComponent', () => {
  let component: HospitalHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<HospitalHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
