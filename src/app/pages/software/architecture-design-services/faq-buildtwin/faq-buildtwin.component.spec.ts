import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBuildtwinComponent } from './faq-buildtwin.component';

describe('FaqBuildtwinComponent', () => {
  let component: FaqBuildtwinComponent;
  let fixture: ComponentFixture<FaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
