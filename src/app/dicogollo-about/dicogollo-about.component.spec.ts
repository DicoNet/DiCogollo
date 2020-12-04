import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicogolloAboutComponent } from './dicogollo-about.component';

describe('DicogolloAboutComponent', () => {
  let component: DicogolloAboutComponent;
  let fixture: ComponentFixture<DicogolloAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicogolloAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicogolloAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
