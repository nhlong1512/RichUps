import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import MyModalScreen from "../screens/MyModalScreen";

export type RootStackParamList = {
  Main: undefined;
  MyModal: {
    userId: string;
    name: string;
  };
  Order: {
    order: any;
  };
}

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          options={{headerShown:false}}
          name="MyModal"
          component={MyModalScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
