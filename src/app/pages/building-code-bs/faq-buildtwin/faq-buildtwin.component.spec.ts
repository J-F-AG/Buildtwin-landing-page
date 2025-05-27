import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBuildtwinBuildingCodeBSComponent } from './faq-buildtwin.component';

describe('FaqBuildtwinBuildingCodeBSComponent', () => {
  let component: FaqBuildtwinBuildingCodeBSComponent;
  let fixture: ComponentFixture<FaqBuildtwinBuildingCodeBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBuildtwinBuildingCodeBSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBuildtwinBuildingCodeBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
