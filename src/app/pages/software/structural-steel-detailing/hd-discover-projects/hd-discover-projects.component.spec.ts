import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('HdDiscoverProjectsComponent', () => {
  let component: HdDiscoverProjectsComponent;
  let fixture: ComponentFixture<HdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
