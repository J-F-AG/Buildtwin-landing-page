import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftingSampleDrawingComponent } from './sample-drawing.component';

// import { SampleDrawingComponent } from './sample-drawing.component';

describe('DraftingSampleDrawingComponent', () => {
  let component: DraftingSampleDrawingComponent;
  let fixture: ComponentFixture<DraftingSampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingSampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraftingSampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
