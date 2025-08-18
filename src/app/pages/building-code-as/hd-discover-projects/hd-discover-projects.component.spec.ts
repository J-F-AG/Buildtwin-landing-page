import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdDiscoverProjectsBuildingCodeASComponent } from './hd-discover-projects.component';

describe('HdDiscoverProjectsBuildingCodeASComponent', () => {
  let component: HdDiscoverProjectsBuildingCodeASComponent;
  let fixture: ComponentFixture<HdDiscoverProjectsBuildingCodeASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdDiscoverProjectsBuildingCodeASComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdDiscoverProjectsBuildingCodeASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
