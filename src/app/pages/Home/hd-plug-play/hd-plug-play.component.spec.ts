import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdPlugPlayComponent } from './hd-plug-play.component';

describe('HdPlugPlayComponent', () => {
  let component: HdPlugPlayComponent;
  let fixture: ComponentFixture<HdPlugPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdPlugPlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdPlugPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
