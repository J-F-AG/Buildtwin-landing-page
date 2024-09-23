import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecastServiceComponent } from './precast-service.component';

describe('PrecastServiceComponent', () => {
  let component: PrecastServiceComponent;
  let fixture: ComponentFixture<PrecastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecastServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrecastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
