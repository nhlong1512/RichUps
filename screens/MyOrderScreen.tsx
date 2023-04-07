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
import { useNavigation } from "@react-navigation/native";
import DeliveryCard from "../components/DeliveryCard";

const MyOrderScreen = ({ route }: { route: any }) => {
  const { order } = route.params;
  const navigation = useNavigation();
  const isOrder = true;

  console.log(order);

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
        <DeliveryCard order={order} isOrder={isOrder} />
      </View>
    </ScrollView>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({});
