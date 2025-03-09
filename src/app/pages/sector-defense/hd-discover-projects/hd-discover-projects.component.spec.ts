import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseHdDiscoverProjectsComponent } from './hd-discover-projects.component';

describe('DefenseHdDiscoverProjectsComponent', () => {
  let component: DefenseHdDiscoverProjectsComponent;
  let fixture: ComponentFixture<DefenseHdDiscoverProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefenseHdDiscoverProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefenseHdDiscoverProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
