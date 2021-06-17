import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardScreenComponent } from './edit-card-screen.component';

describe('EditCardScreenComponent', () => {
  let component: EditCardScreenComponent;
  let fixture: ComponentFixture<EditCardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCardScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
