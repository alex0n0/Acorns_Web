import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubScreenComponent } from './stub-screen.component';

describe('StubScreenComponent', () => {
  let component: StubScreenComponent;
  let fixture: ComponentFixture<StubScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StubScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
