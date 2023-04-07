import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Order } from "../typings";
import { Card, Divider } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
  isOrder: boolean;
};

const DeliveryCard: React.FC<Props> = ({ order, isOrder }) => {
  return (
    <Card
      className={
        isOrder
          ? `pt-5 mt-[16px] rounded-[5px] shadow-[0_3px_8px_3px_rgba(0,0,0,0.24)] mx-[10px] bg-[#EB6A7C]`
          : `pt-5 mt-[16px] rounded-[5px] shadow-[0_3px_8px_3px_rgba(0,0,0,0.24)] mx-[10px] bg-[#59c1cc]`
      }
    >
      <View>
        <View className="flex-col justify-center items-center">
          <Entypo name="box" size={40} color="white" />
          <Text className="text-white">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-white font-[700]">
            Expected Delivery: {new Date(order.createdAt).toLocaleString()}
          </Text>
        </View>
        <Divider className="bg-[#fff] h-[1px] mt-[10px] w-full" />

        <View className="text-white flex justify-center items-center">
          <Text className="text-white font-[700] mt-[10px] text-[16px]">
            Address
          </Text>
          <Text className="text-white font-[300]">
            {order.Address}, {order.City}
          </Text>
          <Text className="text-white font-[300]">
            Shipping Cost: ${order.shippingCost}
          </Text>
        </View>
        <Divider className="bg-[#fff] h-[1px] mt-[10px] w-full" />

        <View className="my-[20px]">
          {order.trackingItems.items.map((item) => (
            <View>
              <View className="mx-[20px] flex justify-between items-center flex-row">
                <Text className="text-white italic leading-[30px]">
                  {item.name}
                </Text>
                <Text className="text-white leading-[30px]">
                  x {item.quantity}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className={!isOrder?`w-full h-[200px]`:`w-full h-[400px]`}
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{
              latitude: order.Lat,
              longitude: order.Lng,
            }}
            title="Delivery Location"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </Card>
  );
};

export default DeliveryCard;

const styles = StyleSheet.create({});
