import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColTraneeComponent } from './three-col-tranee.component';

describe('ThreeColTraneeComponent', () => {
  let component: ThreeColTraneeComponent;
  let fixture: ComponentFixture<ThreeColTraneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeColTraneeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeColTraneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
