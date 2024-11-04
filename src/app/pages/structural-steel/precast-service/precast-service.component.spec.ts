import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelPrecastServiceComponent } from './precast-service.component';

// import { PrecastServiceComponent } from './precast-service.component';

describe('StructuralSteelPrecastServiceComponent', () => {
  let component: StructuralSteelPrecastServiceComponent;
  let fixture: ComponentFixture<StructuralSteelPrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelPrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelPrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
