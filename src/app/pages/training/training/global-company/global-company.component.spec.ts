import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCompanyComponent } from './global-company.component';

describe('GlobalCompanyComponent', () => {
  let component: GlobalCompanyComponent;
  let fixture: ComponentFixture<GlobalCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
