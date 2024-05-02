import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubClassComponent } from './update-sub-class.component';

describe('UpdateSubClassComponent', () => {
  let component: UpdateSubClassComponent;
  let fixture: ComponentFixture<UpdateSubClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSubClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
