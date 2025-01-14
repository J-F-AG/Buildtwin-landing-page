import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdDiscoverProjectsBuildingCodeEuroComponent } from './hd-discover-projects.component';

describe('HdDiscoverProjectsBuildingCodeEuroComponent', () => {
  let component: HdDiscoverProjectsBuildingCodeEuroComponent;
  let fixture: ComponentFixture<HdDiscoverProjectsBuildingCodeEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdDiscoverProjectsBuildingCodeEuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdDiscoverProjectsBuildingCodeEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
