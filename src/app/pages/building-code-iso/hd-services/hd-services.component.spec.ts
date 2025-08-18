import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdServicesBuildingCodeISOoComponent } from './hd-services.component';

describe('HdServicesBuildingCodeISOoComponent', () => {
  let component: HdServicesBuildingCodeISOoComponent;
  let fixture: ComponentFixture<HdServicesBuildingCodeISOoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdServicesBuildingCodeISOoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdServicesBuildingCodeISOoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
