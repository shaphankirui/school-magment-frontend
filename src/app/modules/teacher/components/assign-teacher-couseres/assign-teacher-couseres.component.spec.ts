import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeacherCouseresComponent } from './assign-teacher-couseres.component';

describe('AssignTeacherCouseresComponent', () => {
  let component: AssignTeacherCouseresComponent;
  let fixture: ComponentFixture<AssignTeacherCouseresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignTeacherCouseresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignTeacherCouseresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
