import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSafetyComponent } from './data-safety.component';

describe('DataSafetyComponent', () => {
  let component: DataSafetyComponent;
  let fixture: ComponentFixture<DataSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSafetyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
