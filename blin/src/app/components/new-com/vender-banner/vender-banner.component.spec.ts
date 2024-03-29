import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderBannerComponent } from './vender-banner.component';

describe('VenderBannerComponent', () => {
  let component: VenderBannerComponent;
  let fixture: ComponentFixture<VenderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
