import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaServicesNewComponent } from './services-new.component';

// import { SteelDetailingUsaServicesNewComponent } from './services-new.component';

describe('SteelDetailingUsaServicesNewComponent', () => {
  let component: SteelDetailingUsaServicesNewComponent;
  let fixture: ComponentFixture<SteelDetailingUsaServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
