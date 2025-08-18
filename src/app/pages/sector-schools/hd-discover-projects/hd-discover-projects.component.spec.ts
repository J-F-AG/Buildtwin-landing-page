import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('SchoolsHdDiscoverProjectsComponent', () => {
  let component: SchoolsHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<SchoolsHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolsHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchoolsHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
