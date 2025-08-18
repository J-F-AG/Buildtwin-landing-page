import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelServicesOfferedComponent } from './services-offered.component';

// import { ServicesOfferedComponent } from './services-offered.component';

describe('StructuralSteelServicesOfferedComponent', () => {
  let component: StructuralSteelServicesOfferedComponent;
  let fixture: ComponentFixture<StructuralSteelServicesOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelServicesOfferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
