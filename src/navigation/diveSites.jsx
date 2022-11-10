import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import DiveSite from "../screens/diveSites";
import NewDiveSite from "../screens/newDiveSite";

import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const DiveSitesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Catalog"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      
      
      <Stack.Screen
        name="Dive Sites"
        component={DiveSite}
        options={({ navigation }) => ({
          title: "Dive Sites",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("New Dive Site")}>
              <Ionicons name="add-circle-outline" size={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="New Dive Site"
        component={NewDiveSite}
        options={{ title: "List a new Dive Site" }}
      />
     
    </Stack.Navigator>
  );
};

export default DiveSitesNavigator;
