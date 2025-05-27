import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('DataCenterHdDiscoverProjectsComponent', () => {
  let component: DataCenterHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<DataCenterHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCenterHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
