import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { RootStackParamList } from "../navigator/RootNavigator";
import DeliveryCard from "../components/DeliveryCard";
import { Divider } from "react-native-paper";

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const MyModalScreen = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const { name, userId } = route.params;

  const { loading, error, orders } = useCustomerOrders(userId);
  const isOrder = false;
  return (
    <ScrollView>
      <View>
        <TouchableOpacity className="mt-[30px] flex-row justify-end mr-[10px]">
          <MaterialIcons
            name="cancel"
            size={24}
            color="black"
            className="z-[10]"
            onPress={navigation.goBack}
          />
        </TouchableOpacity>

        <View>
          <View>
            <Text className="text-[24px] text-[#59c1cc] font-[700] mt-[10px] text-center">
              {name}
            </Text>
            <Text className="text-[16px] font-[400] text-center mb-[20px]">
              Deliveries
            </Text>
          </View>
          <Divider className="bg-[#59c1cc] h-[1px]" />
        </View>

        <FlatList
          className="pb-[200px]"
          data={orders}
          keyExtractor={(order) => order.trackingId}
          renderItem={({ item: order }) => (
            <DeliveryCard order={order} isOrder={isOrder} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MyModalScreen;

const styles = StyleSheet.create({});
