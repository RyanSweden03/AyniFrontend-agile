import {PaymentMethod} from "./payment-method";
import {OrderDetail} from "../order-detail/order-detail";

export class OrderPayment {
  "ordered_date": string;
  "payment_method": PaymentMethod;
  "order_detail": OrderDetail
  constructor() {
    this.ordered_date = '';
    this.payment_method = new PaymentMethod();
    this.order_detail = new OrderDetail();
  }
}
