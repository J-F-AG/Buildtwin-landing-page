import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderDetailsUiComponent } from './vender-details-ui.component';

describe('VenderDetailsUiComponent', () => {
  let component: VenderDetailsUiComponent;
  let fixture: ComponentFixture<VenderDetailsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderDetailsUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderDetailsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
