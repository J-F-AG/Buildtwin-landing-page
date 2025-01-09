import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBuildtwinBuildingCodeEuroComponent } from './faq-buildtwin.component';

describe('FaqBuildtwinBuildingCodeEuroComponent', () => {
  let component: FaqBuildtwinBuildingCodeEuroComponent;
  let fixture: ComponentFixture<FaqBuildtwinBuildingCodeEuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBuildtwinBuildingCodeEuroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBuildtwinBuildingCodeEuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
