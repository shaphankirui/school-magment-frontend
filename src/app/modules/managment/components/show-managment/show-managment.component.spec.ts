import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManagmentComponent } from './show-managment.component';

describe('ShowManagmentComponent', () => {
  let component: ShowManagmentComponent;
  let fixture: ComponentFixture<ShowManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
