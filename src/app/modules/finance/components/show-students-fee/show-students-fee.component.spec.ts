import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentsFeeComponent } from './show-students-fee.component';

describe('ShowStudentsFeeComponent', () => {
  let component: ShowStudentsFeeComponent;
  let fixture: ComponentFixture<ShowStudentsFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowStudentsFeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowStudentsFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
