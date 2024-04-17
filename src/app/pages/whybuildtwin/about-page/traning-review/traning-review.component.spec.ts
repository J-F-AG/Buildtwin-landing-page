import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningReviewComponent } from './traning-review.component';

describe('TraningReviewComponent', () => {
  let component: TraningReviewComponent;
  let fixture: ComponentFixture<TraningReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraningReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraningReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
