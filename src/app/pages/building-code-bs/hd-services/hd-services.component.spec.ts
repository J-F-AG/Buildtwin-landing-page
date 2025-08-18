import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdServicesBuildingCodeBSComponent } from './hd-services.component';

describe('HdServicesBuildingCodeBSComponent', () => {
  let component: HdServicesBuildingCodeBSComponent;
  let fixture: ComponentFixture<HdServicesBuildingCodeBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdServicesBuildingCodeBSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdServicesBuildingCodeBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
