import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('CadBannerComponent', () => {
  let component: CadBannerComponent;
  let fixture: ComponentFixture<CadBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
