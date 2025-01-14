import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingServicesNewComponent } from './services-new.component';

// import { DraftingServicesNewComponent } from './services-new.component';

describe('DraftingServicesNewComponent', () => {
  let component: DraftingServicesNewComponent;
  let fixture: ComponentFixture<DraftingServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
