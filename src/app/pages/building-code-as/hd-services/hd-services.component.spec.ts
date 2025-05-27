import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdServicesBuildingCodeASComponent } from './hd-services.component';

describe('HdServicesBuildingCodeASComponent', () => {
  let component: HdServicesBuildingCodeASComponent;
  let fixture: ComponentFixture<HdServicesBuildingCodeASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdServicesBuildingCodeASComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdServicesBuildingCodeASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
