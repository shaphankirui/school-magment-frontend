import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagmentComponent } from './create-managment.component';

describe('CreateManagmentComponent', () => {
  let component: CreateManagmentComponent;
  let fixture: ComponentFixture<CreateManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
