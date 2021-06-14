import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsScreenComponent } from './cards-screen.component';

describe('CardsScreenComponent', () => {
  let component: CardsScreenComponent;
  let fixture: ComponentFixture<CardsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
