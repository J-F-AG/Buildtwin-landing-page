import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaBannerComponent } from './banner.component';

// import { BannerComponent } from './banner.component';

describe('BimUsaBannerComponent', () => {
  let component: BimUsaBannerComponent;
  let fixture: ComponentFixture<BimUsaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
