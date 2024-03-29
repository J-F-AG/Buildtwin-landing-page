import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbountJfComponent } from './abount-jf.component';

describe('AbountJfComponent', () => {
  let component: AbountJfComponent;
  let fixture: ComponentFixture<AbountJfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbountJfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbountJfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
