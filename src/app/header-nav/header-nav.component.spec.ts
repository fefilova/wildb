import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHeaderComponent } from './header-nav.component';

describe('OneHeaderComponent', () => {
  let component: OneHeaderComponent;
  let fixture: ComponentFixture<OneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
