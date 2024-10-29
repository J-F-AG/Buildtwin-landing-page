import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('StructuralSteelBannerComponent', () => {
  let component: StructuralSteelBannerComponent;
  let fixture: ComponentFixture<StructuralSteelBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
