import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedCartComponent } from './seed-cart.component';

describe('SeedCartComponent', () => {
  let component: SeedCartComponent;
  let fixture: ComponentFixture<SeedCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
