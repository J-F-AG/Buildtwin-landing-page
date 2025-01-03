import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterHdGoodCompanyComponent } from './hd-good-company.component';

describe('DataCenterHdGoodCompanyComponent', () => {
  let component: DataCenterHdGoodCompanyComponent;
  let fixture: ComponentFixture<DataCenterHdGoodCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterHdGoodCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCenterHdGoodCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
