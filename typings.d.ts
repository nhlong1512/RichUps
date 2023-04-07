import { Float } from "react-native/Libraries/Types/CodegenTypes";

type Customer = {
    email: string;
    name: string;
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type TrackingItem = {
    customer_id: ID;
    customer: Customer;
    items: Item[];
}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
}

type OrderResponse = {
    value: Order;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type Order = {
    carrier: string;
    Address: string;
    City: string;
    Lat: number;
    Lng: number;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItem;
}