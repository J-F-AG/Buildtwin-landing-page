import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBuildtwinBuildingCodeAiscComponent } from './faq-buildtwin.component';

describe('FaqBuildtwinBuildingCodeAiscComponent', () => {
  let component: FaqBuildtwinBuildingCodeAiscComponent;
  let fixture: ComponentFixture<FaqBuildtwinBuildingCodeAiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqBuildtwinBuildingCodeAiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBuildtwinBuildingCodeAiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
