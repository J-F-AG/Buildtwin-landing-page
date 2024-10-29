import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('BimSampleDrawingComponent', () => {
  let component: BimSampleDrawingComponent;
  let fixture: ComponentFixture<BimSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
