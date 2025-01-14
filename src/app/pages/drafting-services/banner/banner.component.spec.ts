import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('DraftingBannerComponent', () => {
  let component: DraftingBannerComponent;
  let fixture: ComponentFixture<DraftingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
