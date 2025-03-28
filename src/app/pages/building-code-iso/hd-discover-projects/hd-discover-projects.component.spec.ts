import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdDiscoverProjectsBuildingCodeISOComponent } from './hd-discover-projects.component';

describe('HdDiscoverProjectsBuildingCodeISOComponent', () => {
  let component: HdDiscoverProjectsBuildingCodeISOComponent;
  let fixture: ComponentFixture<HdDiscoverProjectsBuildingCodeISOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdDiscoverProjectsBuildingCodeISOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdDiscoverProjectsBuildingCodeISOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
