import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowProcessComponent } from './how-process.component';

describe('HowProcessComponent', () => {
  let component: HowProcessComponent;
  let fixture: ComponentFixture<HowProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
