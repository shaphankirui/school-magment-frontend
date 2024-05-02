import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubClassComponent } from './show-sub-class.component';

describe('ShowSubClassComponent', () => {
  let component: ShowSubClassComponent;
  let fixture: ComponentFixture<ShowSubClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowSubClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
