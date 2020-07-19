import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedByUserComponent } from './added-by-user.component';

describe('AddedByUserComponent', () => {
  let component: AddedByUserComponent;
  let fixture: ComponentFixture<AddedByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
