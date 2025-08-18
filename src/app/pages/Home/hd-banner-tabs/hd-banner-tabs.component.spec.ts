import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdBannerTabsComponent } from './hd-banner-tabs.component';

describe('HdBannerTabsComponent', () => {
  let component: HdBannerTabsComponent;
  let fixture: ComponentFixture<HdBannerTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdBannerTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdBannerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
