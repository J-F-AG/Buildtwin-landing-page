import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningCompanyComponent } from './traning-company.component';

describe('TraningCompanyComponent', () => {
  let component: TraningCompanyComponent;
  let fixture: ComponentFixture<TraningCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraningCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraningCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
