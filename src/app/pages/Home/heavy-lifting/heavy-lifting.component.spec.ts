import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyLiftingComponent } from './heavy-lifting.component';

describe('HeavyLiftingComponent', () => {
  let component: HeavyLiftingComponent;
  let fixture: ComponentFixture<HeavyLiftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyLiftingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyLiftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
