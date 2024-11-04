import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StructuralSteelSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('StructuralSteelSampleDrawingComponent', () => {
  let component: StructuralSteelSampleDrawingComponent;
  let fixture: ComponentFixture<StructuralSteelSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralSteelSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralSteelSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
