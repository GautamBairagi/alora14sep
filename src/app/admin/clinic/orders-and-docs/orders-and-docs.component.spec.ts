import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAndDocsComponent } from './orders-and-docs.component';

describe('OrdersAndDocsComponent', () => {
  let component: OrdersAndDocsComponent;
  let fixture: ComponentFixture<OrdersAndDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersAndDocsComponent]
    });
    fixture = TestBed.createComponent(OrdersAndDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
