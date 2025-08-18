import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdServicesComponent } from './hd-services.component';

describe('HdServicesComponent', () => {
  let component: HdServicesComponent;
  let fixture: ComponentFixture<HdServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
