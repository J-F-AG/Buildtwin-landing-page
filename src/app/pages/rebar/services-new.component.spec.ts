import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarServicesNewComponent } from './services-new.component';

// import { RebarServicesNewComponent } from './services-new.component';

describe('RebarServicesNewComponent', () => {
  let component: RebarServicesNewComponent;
  let fixture: ComponentFixture<RebarServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
