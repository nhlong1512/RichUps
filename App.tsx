import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigator from "./navigator/RootNavigator";
import CustomersScreen from "./screens/CustomersScreen";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://ichalkaranji.stepzen.net/api/mollified-giraffe/__graphql',
  headers: {'Authorization':'apikey ichalkaranji::stepzen.io+1000::90ea6eacffc7e4750194521f300ae3a00d5f2be876048b1b87774a902fafafe4'},
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fmollified-giraffe",
//   cache: new InMemoryCache(),
// });

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
