import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBuildtwinBuildingCodeASComponent } from './faq-buildtwin.component';

describe('FaqBuildtwinBuildingCodeASComponent', () => {
  let component: FaqBuildtwinBuildingCodeASComponent;
  let fixture: ComponentFixture<FaqBuildtwinBuildingCodeASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBuildtwinBuildingCodeASComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBuildtwinBuildingCodeASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
