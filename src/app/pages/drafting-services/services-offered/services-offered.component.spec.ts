import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('DraftingServicesOfferedComponent', () => {
  let component: DraftingServicesOfferedComponent;
  let fixture: ComponentFixture<DraftingServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
