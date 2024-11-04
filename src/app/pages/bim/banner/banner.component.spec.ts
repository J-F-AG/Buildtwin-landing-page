import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('BimBannerComponent', () => {
  let component: BimBannerComponent;
  let fixture: ComponentFixture<BimBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
