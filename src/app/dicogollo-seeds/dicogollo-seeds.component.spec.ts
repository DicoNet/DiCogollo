import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicogolloSeedsComponent } from './dicogollo-seeds.component';

describe('DicogolloSeedsComponent', () => {
  let component: DicogolloSeedsComponent;
  let fixture: ComponentFixture<DicogolloSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicogolloSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicogolloSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
