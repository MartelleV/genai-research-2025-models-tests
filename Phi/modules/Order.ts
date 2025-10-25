import { IAddress } from "./Customer";
import { IInvoice } from "./Invoice";

export interface IItem {
  productId: number;
  quantity: number;
}

export interface IOrder {
  id: number;
  customerId: number;
  customerName: string;
  customerAddress: IAddress;
  customerPhone: string;
  customerBankAccount: string;
  items: Array<IItem>;
  totalAmount: number;
  status: "pending" | "completed" | "cancelled";
  paymentStatus: "unpaid" | "paid" | "refunded";
  orderDate: string;
  uid: string;
  invoice: IInvoice;
}

export class Order implements IOrder {
  constructor(
    public id: number,
    public customerId: number,
    public customerName: string,
    public customerAddress: IAddress,
    public customerPhone: string,
    public customerBankAccount: string,
    public items: Array<IItem>,
    public totalAmount: number,
    public status: "pending" | "completed" | "cancelled",
    public paymentStatus: "unpaid" | "paid" | "refunded",
    public orderDate: string,
    public uid: string,
    public invoice: IInvoice
  ) {}
}