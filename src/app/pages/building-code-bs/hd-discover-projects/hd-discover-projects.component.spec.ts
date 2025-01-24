import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdDiscoverProjectsBuildingCodeBSComponent } from './hd-discover-projects.component';

describe('HdDiscoverProjectsBuildingCodeBSComponent', () => {
  let component: HdDiscoverProjectsBuildingCodeBSComponent;
  let fixture: ComponentFixture<HdDiscoverProjectsBuildingCodeBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdDiscoverProjectsBuildingCodeBSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdDiscoverProjectsBuildingCodeBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
