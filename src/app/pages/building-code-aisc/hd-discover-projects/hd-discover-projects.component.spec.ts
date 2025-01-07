import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdDiscoverProjectsBuildingCodeAiscComponent } from './hd-discover-projects.component';

describe('HdDiscoverProjectsBuildingCodeAiscComponent', () => {
  let component: HdDiscoverProjectsBuildingCodeAiscComponent;
  let fixture: ComponentFixture<HdDiscoverProjectsBuildingCodeAiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdDiscoverProjectsBuildingCodeAiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdDiscoverProjectsBuildingCodeAiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
