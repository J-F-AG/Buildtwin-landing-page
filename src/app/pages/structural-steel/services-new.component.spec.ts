import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelServicesNewComponent } from './services-new.component';

// import { StructuralSteelServicesNewComponent } from './services-new.component';

describe('StructuralSteelServicesNewComponent', () => {
  let component: StructuralSteelServicesNewComponent;
  let fixture: ComponentFixture<StructuralSteelServicesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelServicesNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelServicesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
