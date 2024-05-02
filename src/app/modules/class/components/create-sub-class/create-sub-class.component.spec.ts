import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubClassComponent } from './create-sub-class.component';

describe('CreateSubClassComponent', () => {
  let component: CreateSubClassComponent;
  let fixture: ComponentFixture<CreateSubClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSubClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
