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
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import { CustomerList, CustomerResponse } from "../typings";
import CustomerCard from "../components/CustomerCard";
import { useNavigation } from "@react-navigation/native";

const CustomersScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigation = useNavigation();

  const { loading, error, data } = useQuery(GET_CUSTOMERS);

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
      {data?.getCustomers
        ?.filter(
          (customer: CustomerList) =>
            customer.value.name.toLowerCase().includes(searchText.toLowerCase()) ||
            customer.value.email.toLowerCase().includes(searchText.toLowerCase())
        )
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} navigation={navigation} />
        ))}
    </ScrollView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({});
