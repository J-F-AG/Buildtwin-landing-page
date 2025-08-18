import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDrawingComponent } from './sample-drawing.component';

describe('SampleDrawingComponent', () => {
  let component: SampleDrawingComponent;
  let fixture: ComponentFixture<SampleDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleDrawingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleDrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
