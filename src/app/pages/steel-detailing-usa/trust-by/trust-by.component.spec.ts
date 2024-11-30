import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('SteelDetailingUsaTrustByNewComponent', () => {
  let component: SteelDetailingUsaTrustByNewComponent;
  let fixture: ComponentFixture<SteelDetailingUsaTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
