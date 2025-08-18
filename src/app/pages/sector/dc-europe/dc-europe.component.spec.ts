import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcEuropeComponent } from './dc-europe.component';

describe('DcEuropeComponent', () => {
  let component: DcEuropeComponent;
  let fixture: ComponentFixture<DcEuropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcEuropeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DcEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
