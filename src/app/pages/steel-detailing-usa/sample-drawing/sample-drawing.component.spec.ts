import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteelDetailingUsaSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('SteelDetailingUsaSampleDrawingComponent', () => {
  let component: SteelDetailingUsaSampleDrawingComponent;
  let fixture: ComponentFixture<SteelDetailingUsaSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteelDetailingUsaSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteelDetailingUsaSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
