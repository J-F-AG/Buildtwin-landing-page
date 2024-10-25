import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdGoodCompanyComponent } from './hd-good-company.component';

describe('HdGoodCompanyComponent', () => {
  let component: HdGoodCompanyComponent;
  let fixture: ComponentFixture<HdGoodCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdGoodCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdGoodCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
