import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('AirportsHdDiscoverProjectsComponent', () => {
  let component: AirportsHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<AirportsHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportsHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirportsHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
