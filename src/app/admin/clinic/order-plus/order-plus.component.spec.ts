import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlusComponent } from './order-plus.component';

describe('OrderPlusComponent', () => {
  let component: OrderPlusComponent;
  let fixture: ComponentFixture<OrderPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPlusComponent]
    });
    fixture = TestBed.createComponent(OrderPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
