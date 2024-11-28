import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('SteelDetailingUsaBannerComponent', () => {
  let component: SteelDetailingUsaBannerComponent;
  let fixture: ComponentFixture<SteelDetailingUsaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
