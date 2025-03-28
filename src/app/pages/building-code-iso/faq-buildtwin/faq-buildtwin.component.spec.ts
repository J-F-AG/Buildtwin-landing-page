import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBuildtwinBuildingCodeISOComponent } from './faq-buildtwin.component';

describe('FaqBuildtwinBuildingCodeISOComponent', () => {
  let component: FaqBuildtwinBuildingCodeISOComponent;
  let fixture: ComponentFixture<FaqBuildtwinBuildingCodeISOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBuildtwinBuildingCodeISOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBuildtwinBuildingCodeISOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
