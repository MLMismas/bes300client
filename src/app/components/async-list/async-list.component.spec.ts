import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncListComponent } from './async-list.component';

describe('AsyncListComponent', () => {
  let component: AsyncListComponent;
  let fixture: ComponentFixture<AsyncListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
