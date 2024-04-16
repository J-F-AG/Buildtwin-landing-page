import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRowComponent } from './simple-row.component';

describe('SimpleRowComponent', () => {
  let component: SimpleRowComponent;
  let fixture: ComponentFixture<SimpleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
