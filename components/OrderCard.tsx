import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Order } from "../typings";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Card } from "react-native-paper";

type Props = {
  item: Order;
  navigation: any;
};

const OrderCard: React.FC<Props> = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MyOrder", {
          order: item,
        });
      }}
    >
      <Card className="mt-[16px] rounded-[6px]">
        <View className="p-[10px] flex-row justify-between">
          <View className="flex-col justify-center items-center">
            <MaterialCommunityIcons
              name="truck-delivery"
              size={24}
              color="#EB6A7C"
            />
            <Text className="text-[10px]">
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>

          <View className="flex justify-center items-center flex-col">
            <Text className="text-gray-600 text-[12px]">
              {item.carrier}-{item.trackingId}
            </Text>
            <Text className="text-gray-600 text-[16px]">
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View className="flex flex-row justify-center items-center">
            <Text className="text-[#EB6A7C]">
              {item.trackingItems.items.length} x{" "}
            </Text>
            <Feather name="box" size={24} color="gray" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
