import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdServicesBuildingCodeEuroComponent } from './hd-services.component';

describe('HdServicesBuildingCodeEuroComponent', () => {
  let component: HdServicesBuildingCodeEuroComponent;
  let fixture: ComponentFixture<HdServicesBuildingCodeEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdServicesBuildingCodeEuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdServicesBuildingCodeEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
