import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('RebarBannerComponent', () => {
  let component: RebarBannerComponent;
  let fixture: ComponentFixture<RebarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
