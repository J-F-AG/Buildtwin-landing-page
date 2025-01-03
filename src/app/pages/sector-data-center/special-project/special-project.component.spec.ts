import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterSpecialProjectComponent } from './special-project.component';

describe('DataCenterSpecialProjectComponent', () => {
  let component: DataCenterSpecialProjectComponent;
  let fixture: ComponentFixture<DataCenterSpecialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterSpecialProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCenterSpecialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
