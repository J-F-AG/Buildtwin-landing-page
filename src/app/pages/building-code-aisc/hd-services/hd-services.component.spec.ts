import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdServicesBuildingCodeAiscComponent } from './hd-services.component';

describe('HdServicesBuildingCodeAiscComponent', () => {
  let component: HdServicesBuildingCodeAiscComponent;
  let fixture: ComponentFixture<HdServicesBuildingCodeAiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdServicesBuildingCodeAiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdServicesBuildingCodeAiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
