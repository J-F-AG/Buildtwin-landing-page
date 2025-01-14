import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('CadSampleDrawingComponent', () => {
  let component: CadSampleDrawingComponent;
  let fixture: ComponentFixture<CadSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
