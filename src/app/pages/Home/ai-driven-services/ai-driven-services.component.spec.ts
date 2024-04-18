import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDrivenServicesComponent } from './ai-driven-services.component';

describe('AiDrivenServicesComponent', () => {
  let component: AiDrivenServicesComponent;
  let fixture: ComponentFixture<AiDrivenServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDrivenServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiDrivenServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
