import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStudentsListComponent } from './course-students-list.component';

describe('CourseStudentsListComponent', () => {
  let component: CourseStudentsListComponent;
  let fixture: ComponentFixture<CourseStudentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStudentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
