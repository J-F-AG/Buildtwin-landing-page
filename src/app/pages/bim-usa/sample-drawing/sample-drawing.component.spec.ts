import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimUsaSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('BimUsaSampleDrawingComponent', () => {
  let component: BimUsaSampleDrawingComponent;
  let fixture: ComponentFixture<BimUsaSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimUsaSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimUsaSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
