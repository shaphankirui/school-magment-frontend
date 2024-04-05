import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManagmentComponent } from './update-managment.component';

describe('UpdateManagmentComponent', () => {
  let component: UpdateManagmentComponent;
  let fixture: ComponentFixture<UpdateManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
