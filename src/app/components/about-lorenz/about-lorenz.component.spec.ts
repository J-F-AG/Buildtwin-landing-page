import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLorenzComponent } from './about-lorenz.component';

describe('AboutLorenzComponent', () => {
  let component: AboutLorenzComponent;
  let fixture: ComponentFixture<AboutLorenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLorenzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutLorenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
