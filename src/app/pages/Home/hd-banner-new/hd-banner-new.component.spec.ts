import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdBannerNewComponent } from './hd-banner-new.component';

describe('HdBannerNewComponent', () => {
  let component: HdBannerNewComponent;
  let fixture: ComponentFixture<HdBannerNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdBannerNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdBannerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
