import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerTitle: false, headerStyle: { height: 65 } }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
