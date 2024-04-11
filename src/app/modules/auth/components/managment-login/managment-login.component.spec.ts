import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentLoginComponent } from './managment-login.component';

describe('ManagmentLoginComponent', () => {
  let component: ManagmentLoginComponent;
  let fixture: ComponentFixture<ManagmentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagmentLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagmentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
