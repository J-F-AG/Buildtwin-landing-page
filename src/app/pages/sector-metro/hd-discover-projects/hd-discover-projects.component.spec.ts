import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('MetroHdDiscoverProjectsComponent', () => {
  let component: MetroHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<MetroHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetroHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
