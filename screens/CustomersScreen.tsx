import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const CustomersScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <ScrollView className="bg-[#59c1cc]">
      <Image
        source={require("../assets/images/customer_banner.jpeg")}
        className="w-full h-64"
      />
      <TextInput
        mode="outlined"
        label="Search by Customer"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        className="pt-[10px] px-[10px]"
        outlineColor="transparent"
        activeOutlineColor="#59c1cc"
        placeholderTextColor="#969393"
      />
    </ScrollView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
