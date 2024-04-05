import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParentsComponent } from './show-parents.component';

describe('ShowParentsComponent', () => {
  let component: ShowParentsComponent;
  let fixture: ComponentFixture<ShowParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowParentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
