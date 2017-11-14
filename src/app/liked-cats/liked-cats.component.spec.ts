import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedCatsComponent } from './liked-cats.component';

describe('LikedCatsComponent', () => {
  let component: LikedCatsComponent;
  let fixture: ComponentFixture<LikedCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
