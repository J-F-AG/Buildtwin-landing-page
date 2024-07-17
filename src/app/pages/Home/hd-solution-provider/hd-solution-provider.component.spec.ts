import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdSolutionProviderComponent } from './hd-solution-provider.component';

describe('HdSolutionProviderComponent', () => {
  let component: HdSolutionProviderComponent;
  let fixture: ComponentFixture<HdSolutionProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdSolutionProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdSolutionProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
