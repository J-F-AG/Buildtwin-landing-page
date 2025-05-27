import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdProvidersComponent } from './hd-providers.component';

describe('HdProvidersComponent', () => {
  let component: HdProvidersComponent;
  let fixture: ComponentFixture<HdProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdProvidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
