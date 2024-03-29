import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProjectComponent } from './feature-project.component';

describe('FeatureProjectComponent', () => {
  let component: FeatureProjectComponent;
  let fixture: ComponentFixture<FeatureProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
