import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercatComponent } from './filtercat.component';

describe('FiltercatComponent', () => {
  let component: FiltercatComponent;
  let fixture: ComponentFixture<FiltercatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
