import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyViewComponent } from './main-body-view.component';

describe('MainBodyViewComponent', () => {
  let component: MainBodyViewComponent;
  let fixture: ComponentFixture<MainBodyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBodyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
