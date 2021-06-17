import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardScreenComponent } from './create-card-screen.component';

describe('CreateCardScreenComponent', () => {
  let component: CreateCardScreenComponent;
  let fixture: ComponentFixture<CreateCardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
