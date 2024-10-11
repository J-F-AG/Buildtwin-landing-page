import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RebarSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('RebarSampleDrawingComponent', () => {
  let component: RebarSampleDrawingComponent;
  let fixture: ComponentFixture<RebarSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebarSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebarSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
