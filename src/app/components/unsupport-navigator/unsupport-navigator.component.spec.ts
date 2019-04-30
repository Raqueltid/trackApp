import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportNavigatorComponent } from './unsupport-navigator.component';

describe('UnsupportNavigatorComponent', () => {
  let component: UnsupportNavigatorComponent;
  let fixture: ComponentFixture<UnsupportNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsupportNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsupportNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
