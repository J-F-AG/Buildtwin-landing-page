import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChangeComponent } from './language-change.component';

describe('LanguageChangeComponent', () => {
  let component: LanguageChangeComponent;
  let fixture: ComponentFixture<LanguageChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
