import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapScreenComponent } from './sitemap-screen.component';

describe('SitemapScreenComponent', () => {
  let component: SitemapScreenComponent;
  let fixture: ComponentFixture<SitemapScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemapScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
