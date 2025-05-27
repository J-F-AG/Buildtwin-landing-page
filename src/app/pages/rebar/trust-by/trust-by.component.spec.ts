import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarTrustByNewComponent } from './trust-by.component';

// import { TrustByComponent } from './trust-by.component';

describe('RebarTrustByNewComponent', () => {
  let component: RebarTrustByNewComponent;
  let fixture: ComponentFixture<RebarTrustByNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarTrustByNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarTrustByNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
