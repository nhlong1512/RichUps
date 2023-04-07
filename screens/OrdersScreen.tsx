import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useOrders from "../hooks/useOrders";
import { Button } from "react-native-paper";
import OrderCard from "../components/OrderCard";

const OrdersScreen = ({ navigation }: { navigation: any }) => {
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);
  return (
    <ScrollView
    className="bg-[#EB6A7C]"
    >
      <Image
        source={require("../assets/images/orders_banner.jpg")}
        className="w-full h-64"
      />
      <View className="py-2 px-5">
        <Button
          onPress={() => setAscending(!ascending)}
          mode="contained"
          className="p-0 rounded-[0px] bg-[#ffc5c0]"
        >
          <Text className="text-gray-400 font-[400]">
            {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
          </Text>
        </Button>

        {orders?.sort((a,b) => {
          if(ascending){
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
          }else{
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
          }
        }).map(order=> (
          <OrderCard key={order.trackingId} item ={order}/>
        ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
