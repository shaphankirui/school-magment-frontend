import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinanceComponent } from './update-finance.component';

describe('UpdateFinanceComponent', () => {
  let component: UpdateFinanceComponent;
  let fixture: ComponentFixture<UpdateFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFinanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
