import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoHeaderComponent } from './header-controls.component';

describe('TwoHeaderComponent', () => {
  let component: TwoHeaderComponent;
  let fixture: ComponentFixture<TwoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
