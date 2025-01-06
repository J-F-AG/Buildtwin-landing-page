import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCodeAiscComponent } from './sector.component';

describe('BuildingCodeAiscComponent', () => {
  let component: BuildingCodeAiscComponent;
  let fixture: ComponentFixture<BuildingCodeAiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingCodeAiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingCodeAiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
