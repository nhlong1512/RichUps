import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { Card, Divider } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

interface Props {
  email: string;
  name: string;
  userId: string;
  navigation: any;
}

const CustomerCard:React.FC<Props> = ({ email, name, userId, navigation}) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigateToModal = () => {
    navigation.navigate('MyModal', {
      name: name,
      userId: userId,
    })
  }
  
  return (
    <TouchableOpacity onPress={navigateToModal}>
      <Card className="p-5 mt-[16px] mx-[10px]">
        <View>
          <View className="flex-row justify-between mb-[16px]">
            <View>
              <Text className="text-[20px] font-[700]">{name}</Text>
              <Text className="text-[14px] font-[400] text-[#59c1cc]">
                ID: {userId}
              </Text>
            </View>
            <View className="flex-row justify-end items-end">
              <Text className="text-[#59c1cc]">
                {loading ? "Loading..." : `${orders.length} x`}
              </Text>
              <Entypo name="box" size={40} color="#59c1cc" />
            </View>
          </View>
          <Divider />
          <View className="mt-[10px]">
            <Text>{email}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;

const styles = StyleSheet.create({});
