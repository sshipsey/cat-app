import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatButtonsComponent } from './cat-buttons.component';

describe('CatButtonsComponent', () => {
  let component: CatButtonsComponent;
  let fixture: ComponentFixture<CatButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
