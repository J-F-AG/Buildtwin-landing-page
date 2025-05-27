import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseFaqBuildtwinComponent } from './faq-buildtwin.component';

describe('DefenseFaqBuildtwinComponent', () => {
  let component: DefenseFaqBuildtwinComponent;
  let fixture: ComponentFixture<DefenseFaqBuildtwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefenseFaqBuildtwinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefenseFaqBuildtwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
