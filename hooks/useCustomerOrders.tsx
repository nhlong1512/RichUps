import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";
import { Order, OrderResponse } from "../typings";

const useCustomerOrders = (userId: string) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    if (!data) return;
    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
        carrier: value.carrier,
        Address: value.Address,
        City: value.City,
        Lat: value.Lat,
        Lng: value.Lng,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems,
      }));
      const customerOrders = orders.filter(
        (order) => order.trackingItems.customer_id === userId
      );
      setOrders(customerOrders);
  }, [data, userId]);
  return { loading, error, orders };
};

export default useCustomerOrders;

const styles = StyleSheet.create({});
