import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerScreenComponent } from './scanner-screen.component';

describe('ScannerScreenComponent', () => {
  let component: ScannerScreenComponent;
  let fixture: ComponentFixture<ScannerScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
