import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPlantHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('PowerPlantHdDiscoverProjectsComponent', () => {
  let component: PowerPlantHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<PowerPlantHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerPlantHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerPlantHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
