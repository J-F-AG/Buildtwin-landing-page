import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterSectorComponent } from './sector.component';

describe('DataCenterSectorComponent', () => {
  let component: DataCenterSectorComponent;
  let fixture: ComponentFixture<DataCenterSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataCenterSectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataCenterSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
